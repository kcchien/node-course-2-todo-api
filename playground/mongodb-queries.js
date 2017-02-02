/**
 * Created by KC on 03/02/2017.
 */
const {ObjectID} = require('mongodb');
const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');

let id = '588fdf06d0d3a972affdd50b1';

/* 判斷Id是否正確 */
if (!ObjectID.isValid(id)) {
    return console.log('Id not found');
}

/* Return Array */
Todo.find({
    _id: id
}).then((todos) => {
   console.log('Todo find: ',todos);
});

/* Return Object */
Todo.findOne({
    _id:id
}).then((todo) => {
    console.log('Todo find one: ', todo);
});

/* Return Object */
Todo.findById(id).then((todo) => {
    if (!todo) {
        return console.log('Id not found!');
    }
    console.log('Todo By Id: ', todo);
}).catch((e) => console.log(e));