import {applyMiddleware, createStore} from 'redux';
import promise from 'redux-promise';
import logger from 'redux-logger';
import reducer from "./reducer";
//TODO: separate to several reducers
const state = {
	questions: [],
	currentQuestionIndex: 0,
	answers: [],
	loading: true,
	results: null,
	quizzes: [],
	singleQuiz: {
		loading: true,
		currentQuistionIndex: 0,
		answers: []
	}
};


export default createStore(reducer, state, applyMiddleware(promise, logger));