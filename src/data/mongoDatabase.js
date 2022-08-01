const mongoose = require('mongoose');

const connectDatabase = async () => {
    try {
        await mongoose.connect(process.env.MONGODB_URI, { useNewUrlParser: true });
        console.log("connected to database");
    } catch (error) {
        console.log(error);
        process.exit(1);
    }
};

module.exports = connectDatabase;