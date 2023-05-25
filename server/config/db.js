const mongoose = require("mongoose")

const connectDB = async () => {
    try {
        const conn = await mongoose.connect(process.env.DB_URI, {
            useNewUrlParser: true,
            useUnifiedTopology: true
        })
        console.log("Connected to the Database.")
    } catch (error) {
        console.log(`Error: ${error.message}`)
        process.exit(1)
    }
}

module.exports = connectDB