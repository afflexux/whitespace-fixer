const fs = require('fs');
const path = require('path');

let totalFilesProcessed = 0;
let changedFilesCount = 0;

function processFile(filePath) {
    fs.readFile(filePath, 'utf8', (err, data) => {
        if (err) {
            console.log(`\x1b[31mError reading file: ${filePath}\x1b[0m`); // Red color
        } else {
            // Replace static class and className attributes
            const newData = data.replace(/(?:class|className)\s*=\s*"(.*?)"/g, (match, p1) => {
                if (match.includes(':class') || match.includes('className={')) {
                    return match; // Skip dynamic :class bindings and React dynamic className
                }
                const fixedClassNames = p1.replace(/\s+/g, ' ').trim();
                return match.replace(p1, fixedClassNames);
            });
            if (newData !== data) {
                fs.writeFile(filePath, newData, 'utf8', err => {
                    if (err) {
                        console.log(`\x1b[31mError writing file: ${filePath}\x1b[0m`); // Red color
                    } else {
                        console.log(`\x1b[32mChanged - ${filePath}\x1b[0m`); // Green color
                        changedFilesCount++;
                    }
                });
            }
            totalFilesProcessed++;
        }
    });
}

function traverseDirectory(dir) {
    fs.readdir(dir, (err, files) => {
        if (err) {
            console.log(`\x1b[31mUnable to scan directory: ${dir}\x1b[0m`); // Red color
            return;
        }

        files.forEach(file => {
            const filePath = path.join(dir, file);
            fs.stat(filePath, (err, stats) => {
                if (err) {
                    console.log(`\x1b[31mError reading file stats: ${filePath}\x1b[0m`); // Red color
                } else if (stats.isDirectory() && file !== 'node_modules') {
                    traverseDirectory(filePath); // Recursively traverse subdirectories
                } else if (['.vue', '.jsx', '.js', '.svelte', '.ts'].includes(path.extname(file))) {
                    processFile(filePath);
                }
            });
        });
    });
}

function startProcessing(directoryPath) {
    console.log(`\x1b[33mStarting to process files...\x1b[0m`); // Yellow color
    traverseDirectory(directoryPath);

    process.on('exit', () => {
        console.log(`\n\x1b[36mTotal files processed: ${totalFilesProcessed}\x1b[0m`);
        console.log(`\x1b[36mNumber of files changed: ${changedFilesCount}\x1b[0m`);
    });
}

module.exports = startProcessing;
