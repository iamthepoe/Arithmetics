const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const connection = require('./database/database.js');
const Player = require('./database/Players.js');
//View Engine
	app.set('view engine', 'ejs');
//Static
	app.use(express.static('public'));
//Body parser
	app.use(bodyParser.urlencoded({extended: false}));
	app.use(bodyParser.json());

//Database
	connection
		.authenticate()

		.then(() => {
			console.log("Successful connection.");
		})

		.catch((errorMsg)=>{
			console.log(errorMsg);
		});

app.get('/play', (req,res)=>{
	res.render('index.ejs');
});

app.post('/points', (req,res)=>{
	let points = req.body.points;

});
app.listen(8080, ()=>console.log('Server is running'));