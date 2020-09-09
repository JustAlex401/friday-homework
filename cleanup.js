// TODO: Homework
//      function cleanup (): Remove output folder
//      Use "exports" instead of "module.exports"
// Note: file can be both executed as script and export a function.
var fsE = require('fs-extra');
var fs = require('fs');
// const { statSync } = require('fs-extra');

function cleanup () {
    try{
        fs.statSync('./output');
        fsE.removeSync('./output');
    } catch (err) {
        if (err.code === 'ENOENT') {
            console.log('file or directory does not exist');
          }
    }
}

exports.cleanup = cleanup;

if(require.main === module){
    // console.log(require.main);
    // console.log(module);
    cleanup();
}



