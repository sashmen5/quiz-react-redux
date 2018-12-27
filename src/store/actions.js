import Axios from 'axios';
export const GET_QUESTIONS = 'GET_QUESTIONS';
export const COMMIT_ANSWER = 'COMMIT_ANSWER';

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
