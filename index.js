
const express = require('express');
    morgan = require('morgan');
const app = express();

app.use(morgan('common'));

let topMovies = [
  {
    title: 'The Maze Runner',
    director: '2014'
  },
  {
    title: 'The Princess Bride',
    year: '1987'
  },
  {
    title: 'Twilight',
    year: '2008'
  },
  {
    title: 'Pulp Fiction',
    year: '1994'
  },
  {
    title: 'The Mummy',
    year: '1999'
  },
  {
    title: 'The Santa Clause',
    year: '1994'
  },
  {
    title: 'Snow White & The Huntsman',
    year: '2012'
  },
  {
    title: 'Maleficent',
    year: '2014'
  },
  {
    title: 'The Black Cauldron',
    year: '1985'
  },
  {
    title: 'Labyrinth',
    year: '1986'
  }
];


// GET requests
app.get('/', (req, res) => {
  res.send('Welcome to myFlix!');
});


app.get('/movies', (req, res) => {
  res.json(topMovies);
});

app.use(express.static('public'));


app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).send('Something Broke');
});

// listen for requests
app.listen(8080, () => {
  console.log('Your app is listening on port 8080.');
});