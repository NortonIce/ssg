const express = require('express')
const bodyParser = require('body-parser')
//var winston = require('winston'),
	//expressWinston = require('express-winston');


const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(express.json());
//app.use(expressWinston.logger({
	//transports: [
		//new winston.transports.Console(),
		//new (winston.transports.File) ({filename: 'test.log'})
	//],
	//format: winston.format.combine(
		//winston.format.colorize(),
		//winston.format.json()
	//),
	//meta: true, // optional: control whether you want to log the meta data about the request (default to true)
	//msg: "HTTP {{req.method}} {{req.url}}", // optional: customize the default logging message. E.g. "{{res.statusCode}} {{req.method}} {{res.responseTime}}ms {{req.url}}"
	//expressFormat: true, // Use the default Express/morgan request formatting. Enabling this will override any msg if true. Will only output colors with colorize set to true
	//colorize: false, // Color the text and status code, using the Express/morgan color palette (text: gray, status: default green, 3XX cyan, 4XX yellow, 5XX red).
	//ignoreRoute: function (req, res) { return false; } // optional: allows to skip some log messages based on request and/or response
//}));

app.get('/', (req, res) => {
	res.sendfile('main.html', { root: './public' });
});

app.use(express.static('public'));

app.use('/api/v1', require('./controllers/records.js'));
app.use('/api/minigame', require('./controllers/mapGame.js'));

app.listen(port, '127.0.0.1', ()=>{
	console.log('Listening at port ' + port);
});

