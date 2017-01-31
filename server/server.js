/**
 * Created by KC on 28/01/2017.
 */
var express = require('express');
var bodyParser = require('body-parser');

var {mongoose} = require('./db/mongoose');
var {Todo} = require('./models/todo');
var {User} = require('./models/user');

var app = express();

app.use(bodyParser.json());

app.post('/todos', (req, res) => {
    console.log(req.body);
    var todo = new Todo({
        text:req.body.text
    });
    todo.save().then((doc) => {
        res.send(doc);
    }, (e) => {
        res.send(e);
    });
});

app.get('/todos', (req, res) => {

    Todo.find().then((todos) => {
        // 因為執行find回傳的結果是陣列型態，所以在res.send回傳結果到瀏覽器時，要用物件{}包裝起來
        // 才會判斷成正確的JSON物件
        res.send({todos});
    },(e) => {
        res.status(400).send(e);
    })
});

app.listen(3000, () => {
    console.log('Stared on port 3000');
});

module.exports = {app};