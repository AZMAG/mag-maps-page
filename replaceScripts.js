import { readFileSync } from "node:fs";
import { replaceInFile } from "replace-in-file";
import pkg from "./package.json" with { type: "json" };

const { version, date, copyright } = pkg;

const timeStamp = new Date().toISOString();
const buildStamp = timeStamp.replace(/[^0-9]/g, "").slice(0, -3);

// Each rule keeps the surrounding text in capture groups so only the value is swapped.
const targets = [
    {
        label: "readme",
        files: "./README.md",
        rules: [
            {
                name: "version",
                from: /(## Version \| )\d+\.\d+\.\d+/,
                to: `$1${version}`,
            },
            {
                name: "updated",
                from: /(\*\*Updated\*\* \| )\d{4}-\d{2}-\d{2}/,
                to: `$1${date}`,
            },
            {
                name: "copyright",
                from: /^(Copyright )\d{4}/m,
                to: `$1${copyright}`,
            },
        ],
    },
    {
        label: "license",
        files: ["./LICENSE", "./public/LICENSE"],
        rules: [
            {
                name: "copyright",
                from: /(Copyright \(c\) )\d{4}/,
                to: `$1${copyright}`,
            },
        ],
    },
    {
        label: "humans",
        files: "./public/humans.txt",
        rules: [
            {
                name: "version",
                from: /(Version: )\d+\.\d+\.\d+/,
                to: `$1${version}`,
            },
            {
                name: "lastUpdated",
                from: /(Last updated: )\d{4}-\d{2}-\d{2}/,
                to: `$1${date}`,
            },
        ],
    },
    {
        label: "index",
        files: "./index.html",
        rules: [
            {
                name: "copyright",
                from: /(<meta name="copyright" content="Copyright )\d{4}(")/,
                to: `$1${copyright}$2`,
            },
            {
                name: "version",
                from: /(<meta name="version" content=")\d+\.\d+\.\d+(")/,
                to: `$1${version}$2`,
            },
            {
                name: "revisionDate",
                from: /(<meta name="revision-date" content=")\d{4}-\d{2}-\d{2}(")/,
                to: `$1${date}$2`,
            },
            {
                name: "buildInfo",
                from: /(<meta name="build-info" content=")\d+\.\d+\.\d+\.\d{14}(")/,
                to: `$1${version}.${buildStamp}$2`,
            },
            {
                // Tolerates the multi-line form Prettier produces for long meta tags.
                name: "modifiedTime",
                from: /(<meta\s+property="article:modified_time"\s+content=")[^"]*(")/,
                to: `$1${timeStamp}$2`,
            },
        ],
    },
    {
        label: "docConfig",
        files: "./src/config/docConfig.js",
        rules: [
            {
                name: "version",
                from: /(version: "v)\d+\.\d+\.\d+(")/,
                to: `$1${version}$2`,
            },
            {
                name: "releaseDate",
                from: /(releaseDate: ")\d{4}-\d{2}-\d{2}(")/,
                to: `$1${date}$2`,
            },
            {
                name: "copyright",
                from: /(copyright: ")\d{4}(")/,
                to: `$1${copyright}$2`,
            },
        ],
    },
];

function findUnmatchedRules({ files, rules }) {
    const paths = Array.isArray(files) ? files : [files];

    return paths.flatMap((path) => {
        const content = readFileSync(path, "utf8");
        return rules
            .filter((rule) => !rule.from.test(content))
            .map((rule) => `${path} → ${rule.name}`);
    });
}

(async () => {
    try {
        const unmatched = targets.flatMap(findUnmatchedRules);

        if (unmatched.length > 0) {
            console.error(
                `Replacement patterns matched nothing (the target file's format likely changed):\n  ${unmatched.join("\n  ")}`,
            );
            process.exit(1);
        }

        const results = {};
        for (const { label, files, rules } of targets) {
            results[label] = await replaceInFile({
                files,
                from: rules.map((rule) => rule.from),
                to: rules.map((rule) => rule.to),
            });
        }

        console.log("Replacement results:", results);
    } catch (error) {
        console.error("Error occurred:", error);
        process.exit(1);
    }
})();
