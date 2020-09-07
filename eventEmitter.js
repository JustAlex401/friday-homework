const EventEmitter = require('events');
EventEmitter.captureRejection = true; //node --unhandled-rejections=strict

// This file is just an example how you can create your own event emitter class

class FileProcessor extends EventEmitter {
    runFileProcessing () {
        // I am a runFileProcessing method. I will emit event 'start' (= will change my state to "started")
        // but I do not care about who is listenning, why handle my events
        // it is their own business
        // I will greet them anyway - send a message
        this.emit('start', 'Hi, colleagues!');

        try {
            // execute some stuff #1
        } catch (e) {
            this.emit('error');
        }
        this.emit('firstActionDone');


        try {
            // execute some stuff #2
        } catch (e) {
            this.emit('error');
        }
        this.emit('secondActionDone');

        this.emit('end');
        this.emit('end');
    }
}

module.exports = new FileProcesser(true);