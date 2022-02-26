
// const EventEmitter = require('events');
// const emitter = new EventEmitter();

// // register a listener for emit
// emitter.on("chuti", ({ period, text })=>{
//     console.log(`ghuta beje geche because ${ period } ${ text }`);
// })
// //raise an event
// setInterval(()=>{
//     emitter.emit("chuti",{
//         period: 'first',
//         text : 'priod ended'
//     });
// },3000);

//EventEmitter is a class 
//which from events
const EventEmitter = require('events');
class Mess extends EventEmitter{
    mess() {
        console.log('Hello, are you okay?')
        //raise an event
        setInterval(() => {
            this.emit("chuti", {
                period: 'first',
                text: 'priod ended'
            });
        }, 3000);
    
    }
}
module.exports= Mess;