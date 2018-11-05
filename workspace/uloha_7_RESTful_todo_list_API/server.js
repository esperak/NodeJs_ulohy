
// Import
let express = require('express');
let bodyParser = require('body-parser');
let mongoose = require('mongoose');
let Task = require('./api/models/todoListModel');
let routes = require('./api/routes/todoListRoute');
let cors = require('cors');

// Initialize the app
let app = express();

// Configure bodyparser to handle post requests
app.use(bodyParser.urlencoded({
    extended: true
}));

app.use(cors());
app.use(bodyParser.json());
//app.use(bodyParser.urlencoded({ extended: false }));



//connect directly to mongoose
mongoose.connect('mongodb://localhost:27017/resttodolistdb');
var db = mongoose.connection;



var port = process.env.PORT || 8080;


// Send message for default URL
app.get('/', (req, res) => res.send('Hey!'));

// Use Api routes in the App
app.use(routes)

// Launch app to listen to specified port
app.listen(port, function () {
    console.log("ToDoList RESTful API server started on port " + port);
});


/*
//middleware added to check if user enters not found route 
app.use(function(req, res) {
    res.status(404).send({url: req.originalUrl + ' not found'})
});
*/
