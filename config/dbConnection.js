
const mongoose = require("mongoose")

// connecton with mongodb atlaas



const connectDb = async () => {
    try {
        const connect = await mongoose.connect("mongodb+srv://csv:EUidF74kqnEaJm07@cluster0.yd27x.mongodb.net/IssueTracker?retryWrites=true&w=majority")
        console.log("Database Connected: ", connect.connection.name)
    }
    catch (err) {
        console.log(err)
        process.exit(1)
    }
}
module.exports = connectDb;
