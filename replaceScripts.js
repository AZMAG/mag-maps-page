import { replaceInFile } from "replace-in-file";
import pkg from "./package.json" assert { type: "json" };

// README
const reVersion = new RegExp(
    "(### Version | )([0-9]+)(?:.([0-9]+))(?:.([0-9]+))",
);
const newVersion = " " + pkg.version;

const reUpdate = new RegExp("(Updated | )([0-9]{4}-[0-9]{2}-[0-9]{2})");
const newUpdate = " " + pkg.date;

const reCopyRightDate = new RegExp("(Copyright )([0-9]{4})");
const newCopyRightDate = "Copyright " + pkg.copyright;

const readme = {
    files: "./README.md",
    from: [reVersion, reUpdate, reCopyRightDate],
    to: [newVersion, newUpdate, newCopyRightDate],
};

// LICENCE
const reCopyDate = new RegExp("(Copyright \\(c\\) )([0-9]{4})");
const newCopyDate = "Copyright (c) " + pkg.copyright;

const license = {
    files: ["./LICENSE", "./public/LICENSE"],
    from: [reCopyDate],
    to: [newCopyDate],
};

// Humans.txt
const reVersionHumans = new RegExp(
    "(Version: )([0-9]+)(?:.([0-9]+))(?:.([0-9]+))",
);
const newVersionHumans = "Version: " + pkg.version;
const reUpdateHumans = new RegExp(
    "(Last updated: )([0-9]{4}-[0-9]{2}-[0-9]{2})",
);
const newUpdateHumans = "Last updated: " + pkg.date;

const humans = {
    files: "./public/humans.txt",
    from: [reVersionHumans, reUpdateHumans],
    to: [newVersionHumans, newUpdateHumans],
};

// index.html
const reIndexVersion = new RegExp(
    '(<meta name="version" content=")([0-9]+)(?:.([0-9]+))(?:.([0-9]+))(" \\/>)',
);
const newIndexVersion = '<meta name="version" content="' + pkg.version + '" />';

const reIndexDate = new RegExp(
    '(<meta name="revision-date" content=")[0-9]{4}-[0-9]{2}-[0-9]{2}(" \\/>)',
);
const newIndexDate = '<meta name="revision-date" content="' + pkg.date + '" />';

const timeStamp = new Date().toISOString();
// .replace(/[^0-9]/g, "")
// .slice(0, -3)
const timeStampBuild = timeStamp.replace(/[^0-9]/g, "").slice(0, -3);

const reIndexBuild = new RegExp(
    '(<meta name="build-info" content=")([0-9]+)(?:.([0-9]+))(?:.([0-9]+))(?:.)(\\d{14})(" \\/>)',
);
const newIndexBuild =
    '<meta name="build-info" content="' +
    pkg.version +
    "." +
    timeStampBuild +
    '" />';

const reModified = new RegExp(
    '(<meta property="article:modified_time" content=")(\\d{4})-(\\d{2})-(\\d{2})T(\\d{2}):(\\d{2}):(\\d{2}(?:\\.\\d*)?)((-(\\d{2}):(\\d{2})|Z)?)(" \\/>)',
);
const newModified =
    '<meta property="article:modified_time" content="' + timeStamp + '" />';

const index = {
    files: "./index.html",
    from: [reIndexVersion, reIndexDate, reIndexBuild, reModified],
    to: [newIndexVersion, newIndexDate, newIndexBuild, newModified],
};

// DocConfig.js
const reVersionConfig = new RegExp(
    '(version: ")(v[0-9]+)(?:.([0-9]+))(?:.([0-9]+))(")',
);
const newVersionConfig = 'version: "v' + pkg.version + '"';

const reDateConfig = new RegExp('(date: ")([0-9]{4}-[0-9]{2}-[0-9]{2})(")');
const newDateConfig = 'date: "' + pkg.date + '"';

const reCopyrightConfig = new RegExp('(copyright: ")([0-9]{4})(")');
const newCopyrightConfig = 'copyright: "' + pkg.copyright + '"';

const docConfig = {
    files: "./src/config/DocConfig.js",
    from: [reVersionConfig, reDateConfig, reCopyrightConfig],
    to: [newVersionConfig, newDateConfig, newCopyrightConfig],
};

(async () => {
    try {
        const readmeResults = await replaceInFile(readme);
        const licenseResults = await replaceInFile(license);
        const humansResults = await replaceInFile(humans);
        const indexResults = await replaceInFile(index);
        const docConfigResults = await replaceInFile(docConfig);
        const results = {
            readmeResults,
            licenseResults,
            humansResults,
            indexResults,
            docConfigResults,
        };
        console.log("Replacement results:", results);
    } catch (error) {
        console.error("Error occurred:", error);
    }
})();
