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

app.get('/api/developers/:id', (req, res) => {
    const dev = db.find(function(dev){
        return dev.id == req.params.id;
    });
    if(!dev) {
        res.status(404).end();
        return;
    }
    res.json(dev);
});
const port = 3000

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}/`);
});