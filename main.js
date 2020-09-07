/**
 * Used resources:
 * https://nodejs.org/docs/latest-v12.x/api/fs.html
 * https://nodejs.org/docs/latest-v12.x/api/buffer.html
 * https://nodejs.org/docs/latest-v12.x/api/events.html
 * https://www.tutorialspoint.com/nodejs/nodejs_event_emitter.htm
 */

// TODO:
//      The main goal - copy files from folder data to "output" folder and emit events
//      The whole main.js file has to be an instance of Event Emitter.
//      eventEmitter.js is an example for you

//      How to achive:
//      - create a class FileProcessor which extends EventEmitter
//      - run steps prepareWorkingDirectory, dealWithEventsInStreamsInFs, dealWithStreamsInFs inside class
//      - emit events for each step
//      - export instance of a created class

const fs = require("fs");
const prepare = require("./prepare");

function dealWithEventsInStreamsInFs() {
    // Set utf-8 enconing for the read stream
    const readStream = fs.createReadStream("some file");

    readStream.on("data", (chunk) => {
        // count chunks and append (use 'a' modefor fs methos) file in output folder with each chunk
    })

    readStream.on("end", () => {
        // emit event that you finish to read fromthe stream, add to event a message with number of chunks
    })

    console.log("Main is finished, but streams are still working");
}

function dealWithStreamsInFs() {
    // Use pipe here to read from one stream and write to another
}
