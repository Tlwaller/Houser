require('dotenv').config();
const massive = require('massive');
const express = require('express');
const session = require('express-session');
const controller = require('./controller');

const app = express();

const {CONNECTION_STRING, SESSION_SECRET} = process.env;

massive(CONNECTION_STRING)
.then((db) => {
    app.set('db', db);
});

const PORT = 4000;

app.use(session(
    {
    resave: true,
    saveUninitialized: false,
    secret: SESSION_SECRET
}))

app.use(express.json());

app.get('/api/houses', controller.listHouses);
app.post('/api/houses', controller.addHouses);
// app.delete('/api/houses/:id', controller.deleteHouse);

app.listen(PORT, () => {
    console.log(`Listening on port ${PORT}`)
})