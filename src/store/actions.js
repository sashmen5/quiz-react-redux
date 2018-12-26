import Axios from 'axios';
export const GET_QUESTIONS = 'GET_QUESTIONS';

export function getQuestions() {
	return Axios.get('http://localhost:3000/api/quiz')
		.then(response => response.data)
		.then(data => ({
			type: GET_QUESTIONS,
			questions: data.quiz
		}));
}