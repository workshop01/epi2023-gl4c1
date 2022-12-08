//importations
const express = require('express')
const cors = require('cors')

// initialisation
const server = express()
server.use(cors())
//traitements

server.get('/getList' , (req , res)=>{
    console.log('list')
    //res.end()
    res.send('test')
})



//Execution du serveur
server.listen(5001 , ()=>{
    // fonction sera traité apres l'excution de la fonction listen
    console.log("server run ")
})