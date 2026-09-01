// Detects mismatches between git's tracked path casing and the actual on-disk
// casing. Windows/macOS filesystems are case-insensitive, so a stale case
// mismatch here can build/run fine locally but break on case-sensitive
// deploy targets (Linux CI, most hosting).
import { execSync } from "child_process";
import { existsSync, readdirSync } from "fs";
import path from "path";

const trackedFiles = execSync("git ls-files", { encoding: "utf8" })
    .split("\n")
    .filter(Boolean);

const mismatches = [];

for (const trackedPath of trackedFiles) {
    const parts = trackedPath.split("/");
    let currentDir = ".";

    for (const part of parts) {
        const fullPath = path.join(currentDir, part);

        if (!existsSync(fullPath)) {
            mismatches.push(trackedPath);
            break;
        }

        const actualNames = readdirSync(currentDir);
        if (!actualNames.includes(part)) {
            mismatches.push(trackedPath);
            break;
        }

        currentDir = fullPath;
    }
}

if (mismatches.length > 0) {
    console.error("Case mismatch between git and the filesystem:\n");
    for (const file of mismatches) {
        console.error(`  ${file}`);
    }
    console.error(
        "\nThese paths are tracked by git with different casing than what exists on disk. " +
            "This can break builds on case-sensitive filesystems (Linux CI/deploy).",
    );
    process.exit(1);
}

console.log("No file casing mismatches found.");
