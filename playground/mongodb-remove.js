/**
 * Created by KC on 06/02/2017.
 */
const {ObjectID} = require('mongodb');

const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');
const {User} = require('./../server/models/user');

// Remove all
// Todo.remove({}).then((result) => {
//     console.log(result);
// });

Todo.findByIdAndRemove('5898219ec6ee15122bdde5d9').then((todo) => {
    console.log(todo);
});