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

    // find one and update
    db.collection('Todos').findOneAndUpdate(
        {_id:new ObjectID('588b4aa95eeb3369874d6973')},
        {
            $set:{
                completed: false,
                text:'ABCDEFGHIJK'
            }
        },
        {
            returnOriginal: false
        }
    ).then((result) => {
        console.log(result);
    });

    // Close connection
    // db.close();
});

