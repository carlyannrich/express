const express = require('express')
const app = express()
const port = 3000
const pokemonResponse = require('./response.json');

app.use('/pokemon', (req, res, next) => {
    console.log('Gotta catch em all!');
    next();
});

app.use('/pokemon', (req, res, next) => {
    const time = new Date().toLocaleDateString();
    console.log('Date of catching them all: ', time);
    next();
});

app.get('/pokemon', (req, res) => {
    res.json(pokemonResponse);
});

app.get('/pokemon/:name', (req, res) => {
    const pokemonName = String(req.params.name);
    const getPokemonName = pokemonResponse.results.find((result) => result.name === pokemonName);

    if (getPokemonName) {
        res.json(getPokemonName);
    } else {
        res.status(500).send('Are you sure that is a Pokemon?!')
    }
});

app.get('/', (req, res) => {
    res.send('<h1>Hello World!<h1>')
})

app.get('/hello', (req, res) => {
    res.send('<h1>Hello Hello World!<h1>')
})

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})