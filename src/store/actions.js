import Axios from 'axios';
export const GET_QUESTIONS = 'GET_QUESTIONS';
export const GET_RESULTS = 'GET_RESULTS';
export const COMMIT_ANSWER = 'COMMIT_ANSWER';
export const END_QUIZ = 'END_QUIZ';

export function getQuestions() {
	return Axios.get('http://localhost:3000/api/quiz')
		.then(response => response.data)
		.then(data => ({
			type: GET_QUESTIONS,
			questions: data.quiz
		})).catch(err => console.log(err));
}


export function commitAnswer(answer) {
	return {
		type: COMMIT_ANSWER,
		answer
	}
}

export function getResults(answers) {
	return Axios.post('http://localhost:3000/api/quiz', {answers})
		.then(response => response.data)
		.then(data => ({
			type: GET_RESULTS,
			results: data.results
		}))
}

export function endQuiz() {
	return {
		type: END_QUIZ
	}
}
