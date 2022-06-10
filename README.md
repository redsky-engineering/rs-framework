# RedSky Framework

A UI component kit for building React projects. Includes React components, custom hooks, and utilities functions.

## Usage

In order to be able to use this framework in your projects you will need to install the peer dependencies. This includes

-   classnames
-   react@17
-   react-dom@17
-   lodash.clonedeep

In addition to peer dependencies you will also need to import the compiled CSS used throughout the framework into your project just once.
You can do this by putting the following in your App.tsx

`import "@redskytech/framework/index.css"`

Some components might require extra integration. For example if you make use of the popupController you will need to add the
`popupController.instance` to your App.tsx. See the individual stories for examples.

## Demo

RedSky Framework utilizes storybook to demonstrate available components

## Building

To build run the following command

`yarn build`

This will output a self-contained publishable folder in the root/dist folder.

## Publishing

You first need to be a member of the @redskytech organization with publishing capability. Then you need to run the
following command:

`yarn release:xxx` - where xxx is either (major, minor, patch, pre:alpha)

This uses the npm package standard-version which will automatically increment the package.json version
as well as git tag the commit and put all commit notes into the CHANGELOG.md

Finally, publish to npmjs.org with the command

`yarn build:publish`

## Commit Messages

Commit messages should follow guidelines specified at [conventional commits](https://www.conventionalcommits.org/en/v1.0.0/).
This helps with auto changelog generated file.
