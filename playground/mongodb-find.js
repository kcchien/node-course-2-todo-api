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

    // SELECT ALL
    // db.collection('Todos').find({_id: new ObjectID('588b44e5e964b54949b8662d')}).toArray().then((docs) => {
    //     console.log('Todos');
    //     console.log(JSON.stringify(docs, undefined, 2));
    // }, (err) => {
    //     console.log('Unable to fetch todos', err)
    // });

    db.collection('Todos').find().count().then((count) => {
        console.log(`Todos count: ${count}`);
    }, (err) => {
        console.log('Unable to fetch todos', err);
    });

    // Close connection
    db.close();
});

