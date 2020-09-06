/**
 * Used resources:
 * https://nodejs.org/docs/latest-v12.x/api/fs.html
 * https://nodejs.org/docs/latest-v12.x/api/buffer.html
 * https://nodejs.org/docs/latest-v12.x/api/events.html
 */

// TODO:
//      Copy files from folder data to "output" folder
const fs = require('fs');
const prepare = require('./prepare');
console.log('Modules import');

// prepare();
// dealWithStreamsInFs()
// dealWithEventsInStreamsInFs()
// cleanup() 

function dealWithEventsInStreamsInFs() {
    console.log('dealWithEventsInStreamsInFs function started');
    let fileData = '';
    let numberOfChunks = 0;
    const readStream = fs.createReadStream('./data/Catcher_in_the_Rye.pdf');

    readStream.on('data', function (chunk) {
        console.log('We read a file via streams');
        numberOfChunks = numberOfChunks + 1;
        fileData = Buffer.from(chunk).toString('utf-8');
    });

    readStream.on('end', () => {
        console.log('We finished');
        console.log(`It was ${numberOfChunks} chunks`);
    })

    readStream.on('<event name>', function (chunk) {
        console.log('Noname event');
     });

     console.log('Main is finished, but streams are still working');
}

function dealWithStreamsInFs() {
    // readStream.pipe(write stream);
    const readStream = fs.createReadStream('./data/Catcher_in_the_Rye.pdf');
    const writeStream = fs.createWriteStream('./output/Catcher_in_the_Rye.pdf');
    readStream.pipe(writeStream);
}
dealWithEventsInStreamsInFs()