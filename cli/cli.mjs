#! /usr/bin/env node
import inquirer from 'inquirer';
import chalk from 'chalk';
import fs from 'fs';
import path from 'path';
import { getComponentScssTemplate, getComponentTsxTemplate } from './templates.mjs';

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
			value: 'page'
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
		process.exit(1);
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

async function createComponent() {
	errorIfNotExists('src/components');

	let name = await getName('Component');

	let directoryName = name.charAt(0).toLowerCase() + name.slice(1);
	fs.mkdirSync(path.join(process.cwd(), 'src/components', directoryName));

	const tsxFileContents = getComponentTsxTemplate(name);
	fs.writeFileSync(path.join(process.cwd(), 'src/components', directoryName, `${name}.tsx`), tsxFileContents);

	const scssFileContents = getComponentScssTemplate(name);
	fs.writeFileSync(path.join(process.cwd(), 'src/components', directoryName, `${name}.scss`), scssFileContents);

	console.log(chalk.green(`Component ${name}.{tsx,scss} created`));
}

async function createPage() {
	errorIfNotExists('src/pages');

	let name = await getName('Page');

	let directoryName = name.charAt(0).toLowerCase() + name.slice(1);
	fs.mkdirSync(path.join(process.cwd(), 'src/pages', directoryName));

	const tsxFileContents = getPageTsxTemplate(name);
	fs.writeFileSync(path.join(process.cwd(), 'src/pages', directoryName, `${name}.tsx`), tsxFileContents);

	const scssFileContents = getPageScssTemplate(name);
	fs.writeFileSync(path.join(process.cwd(), 'src/pages', directoryName, `${name}.scss`), scssFileContents);

	console.log(chalk.green(`Page ${name}.{tsx,scss} created`));
}

async function createPopup() {
	errorIfNotExists('src/popups');

	let name = await getName('Popup');

	let directoryName = name.charAt(0).toLowerCase() + name.slice(1);
	fs.mkdirSync(path.join(process.cwd(), 'src/popups', directoryName));

	const tsxFileContents = getPopupTsxTemplate(name);
	fs.writeFileSync(path.join(process.cwd(), 'src/popups', directoryName, `${name}.tsx`), tsxFileContents);

	const scssFileContents = getPopupScssTemplate(name);
	fs.writeFileSync(path.join(process.cwd(), 'src/popups', directoryName, `${name}.scss`), scssFileContents);

	console.log(chalk.green(`Popup ${name}.{tsx,scss} created`));
}
