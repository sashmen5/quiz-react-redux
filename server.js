const express = require('express');
var cors = require('cors')
const quiz = require('./quiz.json');

const server = express();

server.use((cors()));

server.get('/api/quiz', (req, res) => {
	res.json({ok: true, quiz});
});



server.listen(3000, () => console.log('Server is listening on port 3000'));