
const mongoose = require('mongoose');

async function connectDB() {
    try {
        await mongoose.connect('mongodb://127.0.0.1:27017/test-db');
        console.log('DB Connected.');
    } catch (err) {
        console.error('Connection error:', err);
    }
}

connectDB();

