const express = require('express');
const quiz = require('./quiz.json');

const server = express();
server.get('/api/quiz', (req, res) => {
	res.json({ok: true, quiz});
});



server.listen(3000, () => console.log('Server is listening on port 3000'));