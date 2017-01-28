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

    // delete many
    // db.collection('Todos').deleteMany({text:'Eat lunch'}).then((result) => {
    //     console.log(result)
    // });

    // delete one
    // db.collection('Todos').deleteOne({text: 'Eat lunch'}).then((result)=>{
    //     console.log(result);
    // });

    // find one and delete
    // db.collection('Todos').findOneAndDelete({completed:true}).then((result) => {
    //     console.log(result);
    // });

    // Close connection
    // db.close();
});

