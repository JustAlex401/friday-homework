// TODO:
//       import an instance of FileProcesser class from main.js
//       get list of events to listen
//       create listeners and listen to events (define by yourself what you want to do in listeners)
//       handle errors

const fileProcessingEventEmitter = require('./main.js');

function listenerStart() { 
    console.log('Work has begun');
}

function listenerEnd() { 
    console.log('Work has ended');
}

async function asyncListener(a, b) { 
    setImmediate(() => {
        console.log('this happens asynchronously');
      });
};

async function asyncListenerWithError(value) {
      throw new Error('Async Error');
 };




 fileProcessingEventEmitter.once('start', listenerStart);
 fileProcessingEventEmitter.once('start', asyncListener);
 fileProcessingEventEmitter.once('start', asyncListenerWithError);
//  fileProcessingEventEmitter.once('error', console.log);
fileProcessingEventEmitter.once('end', listenerEnd);

fileProcessingEventEmitter.runFileProcessing();

