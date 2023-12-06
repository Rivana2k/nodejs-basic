const { EventEmitter} = require('events');

const birthdayEventListener = ({name}) => { // event listenernya harus di destructure {}
    console.log(`Happy birthday ${name}!`);
  };

const myEmitter = new EventEmitter();

myEmitter.on('birthday', birthdayEventListener);

myEmitter.emit('birthday', { name: 'alfan' }); //data pada fungsi emit berupa objek