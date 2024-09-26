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
    const dev = db.find(dev => dev.id == req.params.id);
    
    return dev ?
        res.json(dev) :
        res.status(404).end();
});
const port = 3000

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}/`);
});