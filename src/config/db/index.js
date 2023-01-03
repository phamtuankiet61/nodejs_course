const mongoose = require('mongoose');

async function connect() {
    try {
        await mongoose.connect('mongodb://localhost:27017/f8_education_dev', {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        console.log('Connect Succeessfully!!');
    } catch (eror) {
        console.log('Connect Failure!!');
    }
}

module.exports = { connect };
