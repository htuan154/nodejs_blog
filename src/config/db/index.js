const mongoose = require('mongoose');

async function connect (){
    try{
        await mongoose.connect('mongodb://localhost:27017/blog_dev');

        console.log('Connect DB Successfully !');
    } 
    catch (error) {
        console.log('Connect DB Failure !');
    }

}

module.exports = {connect} ;