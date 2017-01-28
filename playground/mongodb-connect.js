/**
 * Created by KC on 27/01/2017.
 */

//const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

// MongoDB Connect to Server
MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
    if(err) {
        return console.log('Unable to connect Mongo DB', err);
    }
    // Success to connect MongoDB
    console.log('Connected to MongoDB server');

    // Insert document into MongoDB
    // db.collection('Users').insertOne({
    //     name:"KC",
    //     age: 40,
    //     location:"Taichung"
    // }, (err, result) => {
    //     if(err) {
    //         return console.log('Unable to insert todo', err);
    //     }
    //     console.log(JSON.stringify(result.ops[0]._id.getTimestamp(), undefined, 2));
    // });



    // Close connection
    db.close();
});

