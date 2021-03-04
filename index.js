const express = require('express')

const app = express();
const port = 80;

app.get('/', (req, res) => {
	res.send('Hello from vim');
});

app.use(express.static('public'));

app.listen(port, '0.0.0.0', () => {
	console.log('Listening at port 80');
});

