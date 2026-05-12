#! /usr/bin/env node
import inquirer from 'inquirer';
import chalk from 'chalk';
import fs from 'fs';
import path from 'path';
import {
	getComponentScssTemplate,
	getComponentTsxTemplate,
	getPageScssTemplate,
	getPageTsxTemplate,
	getPopupScssTemplate,
	getPopupTsxTemplate
} from './templates.mjs';
import { exec } from 'child_process';

console.log('\n');
console.log(chalk.red('-'.repeat(80)));
console.log(chalk.red('RedSky Framework CLI'));
console.log(chalk.red('-'.repeat(80)));

const commandExec = {
	component: createComponent,
	page: createPage,
	popup: createPopup
};

let { command } = await inquirer.prompt({
	type: 'list',
	name: 'command',
	message: 'What do you want to do?',
	choices: [
		{
			name: 'Create a new component',
			value: 'component'
		},
		{
			name: 'Create a new page',
			value: 'page'
		},
		{
			name: 'Create a new popup',
			value: 'popup'
		}
	]
});
commandExec[command]();

async function getName(type) {
	let { name } = await inquirer.prompt({
		type: 'input',
		name: 'name',
		message: `What is the name of the ${type}?`
	});

	if (name.charAt(0) !== name.charAt(0).toUpperCase()) {
		console.error(chalk.red(`${type} name must start with an uppercase letter`));
		name = '';
	}

	return name;
}

function errorIfNotExists(relativePath) {
	const fullPath = path.join(process.cwd(), relativePath);
	if (!fs.existsSync(fullPath)) {
		console.log(chalk.red(`Folder ${fullPath} does not exist`));
		process.exit(1);
	}
}

function addFileToGit(filePathName) {
	exec(`git add ${filePathName}`, (error, stdout, stderr) => {
		if (error) {
			console.log(chalk.red(`Error adding ${filePathName} to git`));
			console.log(chalk.red(error));
		}
	}
	)
}

async function createComponent() {
	errorIfNotExists('src/components');

	let name = '';
	do {
		name = await getName('Component');
	} while (!name);

	let directoryName = name.charAt(0).toLowerCase() + name.slice(1);
	fs.mkdirSync(path.join(process.cwd(), 'src/components', directoryName));

	const tsxFileContents = getComponentTsxTemplate(name);
	fs.writeFileSync(path.join(process.cwd(), 'src/components', directoryName, `${name}.tsx`), tsxFileContents);

	const scssFileContents = getComponentScssTemplate(name);
	fs.writeFileSync(path.join(process.cwd(), 'src/components', directoryName, `${name}.scss`), scssFileContents);

	addFileToGit(path.join(process.cwd(), 'src/components', directoryName, `${name}.tsx`));
	addFileToGit(path.join(process.cwd(), 'src/components', directoryName, `${name}.scss`));
	console.log(chalk.green(`Component ${name}.{tsx,scss} created and added to git`));
}

async function createPage() {
	errorIfNotExists('src/pages');

	let name = '';
	do {
		name = await getName('Page');
		if (!name.endsWith('Page')) console.log(chalk.red(`New page must end with Page`));
	} while (!name || !name.endsWith('Page'));

	let directoryName = name.charAt(0).toLowerCase() + name.slice(1);
	fs.mkdirSync(path.join(process.cwd(), 'src/pages', directoryName));

	const tsxFileContents = getPageTsxTemplate(name);
	fs.writeFileSync(path.join(process.cwd(), 'src/pages', directoryName, `${name}.tsx`), tsxFileContents);

	const scssFileContents = getPageScssTemplate(name);
	fs.writeFileSync(path.join(process.cwd(), 'src/pages', directoryName, `${name}.scss`), scssFileContents);

	addFileToGit(path.join(process.cwd(), 'src/pages', directoryName, `${name}.tsx`));
	addFileToGit(path.join(process.cwd(), 'src/pages', directoryName, `${name}.scss`));
	console.log(chalk.green(`Page ${name}.{tsx,scss} created and added to git`));
}

async function createPopup() {
	errorIfNotExists('src/popups');

	let name = '';
	do {
		name = await getName('Popup');
		if (!name.endsWith('Popup')) console.log(chalk.red(`New page must end with Popup`));
	} while (!name || !name.endsWith('Popup'));

	let directoryName = name.charAt(0).toLowerCase() + name.slice(1);
	fs.mkdirSync(path.join(process.cwd(), 'src/popups', directoryName));

	const tsxFileContents = getPopupTsxTemplate(name);
	fs.writeFileSync(path.join(process.cwd(), 'src/popups', directoryName, `${name}.tsx`), tsxFileContents);

	const scssFileContents = getPopupScssTemplate(name);
	fs.writeFileSync(path.join(process.cwd(), 'src/popups', directoryName, `${name}.scss`), scssFileContents);

	addFileToGit(path.join(process.cwd(), 'src/popups', directoryName, `${name}.tsx`));
	addFileToGit(path.join(process.cwd(), 'src/popups', directoryName, `${name}.scss`));
	console.log(chalk.green(`Popup ${name}.{tsx,scss} created and added to git`));
}
