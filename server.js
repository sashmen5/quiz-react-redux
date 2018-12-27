const express = require('express');
var cors = require('cors');
const quiz = require('./quiz.json');

const server = express();

server.use((cors()));
server.use(express.json());

server.get('/api/quiz', (req, res) => {
	setTimeout(() => { res.json({ok: true, quiz})}, 500);
});

server.post('/api/quiz', (req, res) => {
	const answers = req.body.answers;

	const results = quiz.reduce((results, question, index) => {
		const answer = answers[index];

		if(question.answer === answer) {
			results.correct += 1;
		} else {
			results.incorrect += 1;
		}

		return results;
	}, {correct: 0, incorrect: 0, total: quiz.length});

	setTimeout(() => { res.json({ok: true, results})}, 500);
});


server.listen(3000, () => console.log('Server is listening on port 3000'));