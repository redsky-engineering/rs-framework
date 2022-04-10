const path = require('path');
const fs = require('fs');

let packageJson = require(path.join(__dirname, '../package.json'));

// Add module type since we are using es modules as our output
packageJson = { ...packageJson, type: 'module' };
fs.writeFileSync(path.join(__dirname, '../dist/package.json'), JSON.stringify(packageJson, null, '\t'));
console.log('package.json created in dist folder');

function copyFileToDist(rootPath) {
	fs.copyFileSync(path.join(__dirname, '../', rootPath), path.join(__dirname, '../dist'));
}

copyFileToDist('CHANGELOG.md');
copyFileToDist('README.md');
