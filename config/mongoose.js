//first require mongoose
const mongoose=require('mongoose');

// then connect to mongodb
mongoose.connect('mongodb://localhost/MySpace_devlopment');

// get the connection to test whether connected to db or not
const db=mongoose.connection;

// use console.error to show the rror if not connected to the db
db.on('error',console.error.bind(console,"Error connecting to MongoDB"));

//otherwise use the callback function to show that the app is connected to the db
db.once('open',function(){
    console.log('Connected to database :: MongoDB');
});

//export the connection to use it in other modules
module.exports=db

