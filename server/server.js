/**
 * Created by KC on 28/01/2017.
 */

const _ = require('lodash');
const express = require('express');
const bodyParser = require('body-parser');
const {ObjectID} = require('mongodb');

const {mongoose} = require('./db/mongoose');
const {Todo} = require('./models/todo');
const {User} = require('./models/user');

var app = express();

const port = process.env.PORT || 3000;

app.use(bodyParser.json());

// POST /todos
app.post('/todos', (req, res) => {
    console.log(req.body);

    var todo = new Todo({
        text:req.body.text
    });

    todo.save().then((doc) => {
        res.send(doc);
    }, (e) => {
        res.send(e);
        console.log(e);
    });
});

// GET /todos
app.get('/todos', (req, res) => {

    Todo.find().then((todos) => {
        // 因為執行find回傳的結果是陣列型態，所以在res.send回傳結果到瀏覽器時，要用物件{}包裝起來
        // 才會判斷成正確的JSON物件
        res.send({todos});
    },(e) => {
        res.status(400).send(e);
    })
});

// GET /todos by id route
app.get('/todos/:id', (req, res) => {
    var id = req.params.id;

    // Valid Id using isValid
    /* 判斷Id是否正確 */
    if (!ObjectID.isValid(id)) {
        return res.status(404).send();
    }

    /* Return Object */
    Todo.findById(id).then((todo) => {
        if (!todo) {
            return res.status(404).send();
        }
        res.send({todo});

    }).catch((e) => res.status(400).send());
});

// DELETE /todos/:id
app.delete('/todos/:id', (req, res) => {
    // get id
    var id = req.params.id;

    // validate id -> if not valid return 404
    if(!ObjectID.isValid(id)) {
        return res.status(404).send();
    }

    // remove by id
    Todo.findByIdAndRemove(id).then((todo) => {
        // if no doc -> 404
        if(!todo) {
            return res.status(404).send();
        }

        // if doc -> 200
        res.send(todo);
    }).catch((e) => {
        // 400 with empty body
        res.status(404).send();
    });
});

// PATCH /todos/:id
app.patch('/todos/:id', (req, res) => {
    // get id
    var id = req.params.id;

    var body = _.pick(req.body, ['text', 'completed']);

    // validate id -> if not valid return 404
    if(!ObjectID.isValid(id)) {
        return res.status(404).send();
    }

    // 如果有completed這個屬性，而且是布林型態
    if(_.isBoolean(body.completed) && body.completed)
    {
        // Unix Epoch timestamp
        body.completeAt = new Date().getTime();

    } else {
        body.completed = false;
        body.completedAt = null;
    }

    Todo.findByIdAndUpdate(id, {$set: body}, {new: true}).then((todo) => {
        if (!todo) {
            return res.status(404).send();
        }

        res.send({todo});

    }).catch((e) => {
        res.status(400).send();
    });
});

app.listen(port, () => {
    console.log(`Stared on port ${port}`);
});

module.exports = {app};