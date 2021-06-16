const express = require('express')

const app = express();
const port = 3000;

app.get('/', (req, res) => {
	res.sendfile('main.html', { root: './public' });
});

app.use(express.static('public'));

app.use('/api/v1', require('./controllers/records.js'));

app.listen(port, '127.0.0.1', ()=>{
	console.log('Listening at port ' + port);
});

