const path = require('path');
const fs = require('fs');

let packageJson = require(path.join(__dirname, '../package.json'));

// Add module type since we are using es modules as our output
packageJson = { ...packageJson, type: 'module' };

// Remove prepare script since our end module is not using husky
delete packageJson.scripts.prepare;

fs.writeFileSync(path.join(__dirname, '../dist/package.json'), JSON.stringify(packageJson, null, '\t'));
console.log(
	path.join(__dirname, '../', 'package.json'),
	'->',
	path.join(__dirname, '../dist/', 'package.json (modified)')
);

function copyFileToDist(fileRelativePath) {
	const dirRelative = path.dirname(fileRelativePath);
	const destinationFolder = path.join(__dirname, '../dist', dirRelative);

	if (!fs.existsSync(destinationFolder)) {
		fs.mkdirSync(destinationFolder, { recursive: true });
	}

	fs.copyFileSync(path.join(__dirname, '../', fileRelativePath), path.join(__dirname, '../dist/', fileRelativePath));
	console.log(
		path.join(__dirname, '../', fileRelativePath),
		'->',
		path.join(__dirname, '../dist/', fileRelativePath)
	);
}

copyFileToDist('CHANGELOG.md');
copyFileToDist('README.md');
copyFileToDist('./cli/cli.mjs');
copyFileToDist('./cli/templates.mjs');
