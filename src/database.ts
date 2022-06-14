import mongoose from 'mongoose'

mongoose.connect("mongodb://mongo:27017/fullstack")

mongoose.connection.once("open", () => {
    console.log("Conectado ao mongo")
})