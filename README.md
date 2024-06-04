![npm](https://img.shields.io/npm/v/whitespace-fixer)
![license](https://img.shields.io/npm/l/whitespace-fixer)
![downloads](https://img.shields.io/npm/dt/whitespace-fixer)
![downloads](https://img.shields.io/npm/dw/whitespace-fixer)
![downloads](https://img.shields.io/npm/dm/whitespace-fixer)
![GitHub last commit](https://img.shields.io/github/last-commit/afflexux/whitespace-fixer)

# whitespace-fixer

A tool to fix excessive whitespace in class and className attributes of Vue, React, Angular, and Svelte files, particularly handy for TailwindCSS classes.

## Description

`whitespace-fixer` is a simple tool that helps clean up excessive whitespace in class attributes of Vue and `className` attributes of React files. This is especially useful for projects using TailwindCSS, where class names can get quite long and whitespace management is important for readability and maintenance.

While the TailwindCSS Prettier plugin now removes excessive whitespace, the ESLint TailwindCSS plugin does not yet offer this functionality. `whitespace-fixer` fills this gap by ensuring your Vue, React, Angular, and Svelte files have clean, consistent class attributes without excessive whitespace.

Additionally, this tool can be used with other JavaScript frameworks and libraries that use `class` or `className` attributes, such as Angular, Svelte, Preact, Inferno, Riot.js, Hyperapp, Mithril, and vanilla JavaScript.

## Installation

To install `whitespace-fixer`, run:

```bash
npm install -g whitespace-fixer

````
This will install the tool globally, allowing you to use it from anywhere on your system.

## Usage

After installing the tool, you can run it from the command line. You need to provide the path to the directory containing your Vue, React, Angular, and Svelte files. If no directory is provided, the tool will default to the current directory.

### Running the Tool

To run the tool on a specific directory:

```bash
whitespace-fixer /path/to/your/vue/project
````

To run the tool in the current directory:

```bash
whitespace-fixer .
````

The tool will skip processing for `:class` bindings in Vue files and dynamic `className` bindings in React files as they often include dynamic expressions where whitespace could be intentional or necessary.

### Output

The tool will output the following information to the terminal:

*   The paths of the files that have been changed.
*   The total number of Vue files processed.
*   The number of files that have been changed.

### Notes

*   The tool will skip processing for `:class` bindings as they often include dynamic expressions where whitespace could be intentional or necessary.
*   The `node_modules` directory is automatically excluded from processing.

## License

This project is licensed under the ISC License.

## Author

Afflexux
