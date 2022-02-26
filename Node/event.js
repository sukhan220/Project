const  MessClass = require('./mess');
const messObject = new MessClass()

// register a listener for emit
messObject.on("chuti", ({ period, text })=>{
    console.log(`ghuta beje geche because ${ period } ${ text }`);
})


messObject.mess();