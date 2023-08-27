const express = require('express')
const mongoose = require('mongoose')
const authRouter = require('./authRouter')
const  PORT = process.env.PORT || 5000

const app = express()

app.use(express.json())
app.use("/auth", authRouter)

const start = async () => {
    try {
        await mongoose.connect(`mongodb+srv://mongodron1:fz8R9mwtbaOHeIBx@cluster0.59aijax.mongodb.net/petroltest?retryWrites=true&w=majority`, {
            // useMongoClient: true
        })
            .then(() => console.log('MongoDB has started ...'))
        app.listen(PORT, ()=>console.log(`Server started on port ${PORT}`))
    } catch (e) {
        console.log(e)
    }
}

start()