const sequelize = require('./configurations/config');
const express = require('express');
const cors = require('cors');
const app = express();
const books_router = require('./routes/books');
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors({
    origin: "*"
}));

sequelize.sync().then((result) => {
    if (result) {
        console.log("connected to database " + result.config.database);
    }

}).catch((err) => { console.log(err); });

app.listen(3000, () => { console.log('the server is on 3000'); })

app.get('/', function (req, res) {
    res.send("Hello, World!");
});

app.use('/books', books_router);