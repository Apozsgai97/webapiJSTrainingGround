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
    for(let i = 0; i < db.length; i++) {
        if(db[i].id == req.params.id){
            res.json(db[i]);
            return;
        }
    }
    res.status(404).end();
});
const port = 3000

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}/`);
});