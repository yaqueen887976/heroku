const EventEmitter = require('events');

//Create a emitter class
class MyEmitter extends EventEmitter{}

//Init objects
const myEmitter = new MyEmitter();

//Event Listener => callback use arrow function
myEmitter.on('event',() => console.log('Event Fired!'))

myEmitter.emit('event');
myEmitter.emit('event');
myEmitter.emit('event');
myEmitter.emit('event');
myEmitter.emit('event');
