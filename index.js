const express = require('express')

const app = express();
const port = 80;

app.get('/', (req, res) => {
	res.sendfile('main.html', { root: __dirname + '/public' });
});

app.use(express.static('public'));

app.use('/api/v1', require('./controllers/records.js'));

app.listen(port, '0.0.0.0', ()=>{
	console.log('Listening at port 80');
});

