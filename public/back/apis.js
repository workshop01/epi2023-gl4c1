const FeedbackModel = require("./models/Feedback.model")

module.exports = (server)=>{
    server.get('/getList', async (req, res) => {
        /* FeedbackModel.find()
        .then(data=>{
            console.log(data)
        })
        .catch(err=> {
            console.log(err)
        }) */
    
        /*  FeedbackModel.find((err , data)=>{
             console.log(data)
         }) */
        const data = await FeedbackModel.find()
        console.log(data)
    
        console.log('list')
        //res.end()
        res.status(203).send({ rep: 'test' })
    })
    
    server.post('/addFeedback', async(req, res) => {
    
        const feedback = new FeedbackModel(req.body)
        await feedback.save()
        
        res.send(feedback)
    
    })
    
    server.delete('/removeFeedback/:id', async(req, res) => {
        
        const data = await FeedbackModel.deleteOne({_id : req.params.id})
        res.send(data)
    })
    
    server.put('/updateFeedback/:id' , async(req , res)=>{
        const data = await FeedbackModel.updateOne({_id : req.params.id} , req.body)
        res.send(data)
    })
}


