const express = require('express');
const expressHandlebars = require('express-handlebars');
const app = express();

const port = process.env.PORT || 3000;

app.engine(
    'handlebars',
    expressHandlebars({
        defaultLayout: 'main',
    })
);

app.set('view engine', 'handlebars');

app.use((req, res) => {
    res.status(404);
    res.render('404');
});

app.use((err, req, res, next) => {
    console.log(err.message);
    res.status(500);
    res.render('500');
});

app.get('/', (req, res) => {
    res.render('home');
});

app.get('/about', (req, res) => {
    res.render('about');
});

app.listen(port, () => {
    console.log('Server running on port : ' + port);
});
