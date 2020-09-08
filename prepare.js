/**
 * Resources: 
 * https://nodejs.org/docs/latest-v12.x/api/fs.html
 * https://lodash.com/docs
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Template_literals
 * https://nodejs.org/api/modules.html (module.exports, exports, require)
 */

// TODO: Prepare working directory script:
//      - function checkGitignore(): Check if ".gitignore" file exists, otherwise throw an error: "No '.gitignore' file. Please create .gitignore' file, otherwise all .txt files will be commited"
//      - function checkDataFolder(): (1) Check if "data" folder exists, otherwise throw an error: "No 'data' file"
//                                    (2) Check if requried files exist, otherwise throw an error: Not enought files in './data' folder: missed __ file(s)
//      - function checkOutputFolder(): Check "output" folder. If 'output' folder exists, throw an error: 
//                                      "Output folder is here, but need to be removed (use cleanup script)"
//                                      If there is no folder, proceed
//      - function createOutputFolder(): Create directory "output"
//      NOTE: file can be executed as script or can be exported


const fs = require('fs');
const {isEqual} = require('lodash');
const {requiredFiles} = require('./resources.json')

function prepareWorkspace() {
    checkGitignore(); // for homework
    checkDataFolder();
    checkOutputFolder(); // for homework
    createOutputFolder(); // for homework
}

function checkGitignore() {
    // for homework
}

function checkDataFolder() {
    if(!fs.existsSync('./data')) {
        throw new Error('No ./data folder here');
    }
    console.log(' -> ./data folder checked');
    const existedFiles = fs.readdirSync('./data');
    if (!isEqual(existedFiles, requiredFiles)) {
        throw new Error('No files');
    }
}

function checkOutputFolder() {
    // for homework
}

function createOutputFolder() {
    // for home work, not for demo
}

if (require.main === module) {
    prepareWorkspace();
}

module.exports = prepareWorkspace;