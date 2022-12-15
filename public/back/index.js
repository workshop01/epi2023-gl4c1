//importations
const express = require('express')
const cors = require('cors')
const mongoose = require('mongoose')
const FeedbackModel = require('./models/Feedback.model')
// initialisation
const server = express()
server.use(cors())
//accepter format json dans le body d'une requete http
server.use(express.json())
mongoose.set('strictQuery', true);
//connexion à la base de données
mongoose.connect('mongodb://localhost:27017/feedbackgl4', () => {

    console.log('MongoDB Connected')
})
//traitements

require('./apis')(server)

//Execution du serveur
server.listen(5001, () => {
    // fonction sera traité apres l'excution de la fonction listen
    console.log("server run ")
})