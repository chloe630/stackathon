'use strict';

const express = require('express');
const volleyball = require('volleyball');
const bodyParser = require('body-parser');
const path = require('path');
const app = express();

app.use(volleyball);

app.use(bodyParser.urlencoded({ extended : false }));
app.use(bodyParser.json());
app.use(express.static(__dirname));
app.use(express.static(`${__dirname}/public`));
app.use(express.static(`${__dirname}/node_modules`));
app.use(express.static(path.resolve(__dirname, '/node_modules')));

const allUsers = [{
    id: 1,
    name: "mocha chung",
    email: "mocha@meow.com",
    password: "1234",
    favoriteDrinks: [{
        id: 2,
        name: 'Mojito',
        content: '1. mint 2. more mint 3. RUM',
        image: 'http://placegoat.com/200/200'

    },{
        id: 5,
        name: 'Sake',
        content: 'Just drink whatever. why bother',
        image: 'http://placegoat.com/200/200'

    }]
},
    {
    id: 2,
    name: "chloe choi",
    email: "chloe@meow.com",
    password: "4321",
    favoriteDrinks: [{
        id: 1,
        name: 'Martini',
        content: '1. something 2. something else 3. whateverrrrrr',
        image: 'http://placegoat.com/200/200'
    },{
        id: 2,
        name: 'Mojito',
        content: '1. mint 2. more mint 3. RUM',
        image: 'http://placegoat.com/200/200'

    }]
}];


const allRecipes = [{
    id: 1,
    name: 'Martini',
    content: '1. something 2. something else 3. whateverrrrrr',
    image: 'http://placegoat.com/200/200',
    rating: 30
}, {
    id: 2,
    name: 'Mojito',
    content: '1. mint 2. more mint 3. RUM',
    image: 'http://placegoat.com/200/200',
    rating: 451

}, {
    id: 3,
    name: 'Bloody Mary',
    content: '1. Blood 2. Mary 3. Yum..?',
    image: 'http://placegoat.com/200/200',
    rating: 25

}, {
    id: 4,
    name: 'Cosmopolitan',
    content: '1. get Cosmopolitan magazine 2. grind it 3. mix it with sake',
    image: 'http://placegoat.com/200/200',
    rating: 57

}, {
    id: 5,
    name: 'Sake',
    content: 'Just drink whatever. why bother',
    image: 'http://placegoat.com/200/200',
    rating: 100

}];

app.get('/api',  (req, res) => res.sendFile('index.html'));

// const validFrontendRoutes = ['/', '/recipes', '/user', '/recipes/:id', '/users/:id', '/signup', '/login'];
// const indexPath = path.join(__dirname, 'index.html');
// validFrontendRoutes.forEach(stateRoute => {
//     app.get(stateRoute, (req, res) =>{
//         res.sendFile(indexPath);
//     });
// });

app.get('/api/recipes', function (req, res) {
    res.json(allRecipes.map(({id, name, content, image, rating }) => ({id, name, content, image, rating })));
});

app.get('/api/recipes/:id', function (req, res) {
    console.log(req.params.id);

    // 4 === "4"
    const aRecipe = allRecipes.find(p => p.id === +req.params.id);
    if (!aRecipe) res.status(404).end();
    else res.json(aRecipe);
});

app.post('/api/user/', function(req, res) {
    res.json(allUsers.push)
})

// app.get('/api/login');

app.listen(3000, function () {
    console.log('Server listening on port', 3000);
});

