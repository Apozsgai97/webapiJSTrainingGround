const express = require('express');
const app = express();

const db = [
    {
        id: 1,
        name:'Marcus Dev',
        email: 'marcus@salt.dev'
    },
    {
        id: 2,
        name: 'Lilly Designer',
        email: 'lilly@salt.dev'
    }

];

app.use(express.json());

app.get('/api/developers/', (req, res) => {
    res.json(db);
});

app.get('/api/developers/:id', (req, res) => {
    const dev = db.find(dev => dev.id == req.params.id);

    return dev ?
        res.json(dev) :
        res.status(404).end();
});

app.post('/api/developers/', (req, res) => {
    const newDeveloper = {
        id: db.length + 1,
        name: req.body.name,
        email: req.body.email,
    }

    db.push(newDeveloper);

    res
        .status(201)
        .setHeader('location', `/api/developers/${newDeveloper.id}`)
        .json(newDeveloper);
});

app.delete('/api/developers/:id', (req, res) => {
    const deleteDev = db.findIndex(deleteDev => deleteDev.id == req.params.id);

    if (deleteDev !== -1){
        db.splice(deleteDev,1);
        res.status(204).send();
    } else {
        res.status(404).end();
    }

});

module.exports = app;