/**
 * Used resources:
 * https://nodejs.org/docs/latest-v12.x/api/fs.html
 * https://nodejs.org/docs/latest-v12.x/api/buffer.html
 * https://nodejs.org/docs/latest-v12.x/api/events.html
 * https://www.tutorialspoint.com/nodejs/nodejs_event_emitter.htm
 */
//      The main goal - copy files from folder data to "output" folder and emit events
//      The whole main.js file has to be an instance of Event Emitter.
//      eventEmitter.js is an example for you

//      How to achive:
//      - create a class FileProcessor which extends EventEmitter
//      - run steps prepareWorkingDirectory, dealWithEventsInStreamsInFs, dealWithStreamsInFs inside class
//      - emit events for each step
//      - export instance of a created class

const clean = require('./cleanup')
const EventEmitter = require('events');
EventEmitter.captureRejection = true; //node --unhandled-rejections=strict
const fs = require("fs");
const prepare = require("./prepare");

function dealWithEventsInStreamsInFs() {
    // Set utf-8 enconing for the read stream
    let fileData = '';
    let numberOfChunks=0;
    const readStream = fs.createReadStream("./data/My_text_d.txt");


    readStream.on('data', function(chunk){
         // count chunks and append (use 'a' modefor fs methos) file in output folder with each chunk
        console.log("Read a file"); 
        numberOfChunks++;
        fileData = Buffer.from(chunk).toString('utf-8');
        let fd;
        try{
            fd = fs.openSync("./output/My_text_d.txt", 'a');
            // console.log(fd);
            fs.appendFileSync(fd, fileData, 'utf-8');
        } catch (err) {
            console.error(err);
        } finally {
            if (fd !== undefined)
            fs.closeSync(fd);
        }
    });
    // console.log(numberOfChunks);

    // readStream.on("data", (chunk) => {
    //     // count chunks and append (use 'a' modefor fs methos) file in output folder with each chunk
    // })

    readStream.on("end", () => {
        // emit event that you finish to read from the stream, add to event a message with number of chunks
        console.log(` ${numberOfChunks} chunks`);
    })

    console.log("Main is finished, but streams are still working");
}


function dealWithStreamsInFs() {
    // reas stream.pipe(write stream);
    const readStream = fs.createReadStream('./data/My_work.pdf');
    const writeStream = fs.createWriteStream('./output/My_work.pdf');
    readStream.pipe(writeStream);
}


function prepareWorkingDirectory(){
    // clean.cleanup();
    prepare();
}



class FileProcessor extends EventEmitter{
    runFileProcessing(){
        this.emit('start');
        prepareWorkingDirectory();
        dealWithStreamsInFs();
        dealWithEventsInStreamsInFs();
        this.emit('end');
    }
}


module.exports = new FileProcessor(true);




// prepareWorkingDirectory();


// dealWithStreamsInFs();

// dealWithEventsInStreamsInFs();

