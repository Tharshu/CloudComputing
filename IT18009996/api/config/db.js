const mongoose = require('mongoose');

const connectionString = 'mongodb://mongo:27017/inthirajith-db';

const db = async () => {
    const connection = await mongoose.connect(connectionString, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    });

    console.log('MongoDB connected: ${connection.connection.host}');
};

module.exports = db;