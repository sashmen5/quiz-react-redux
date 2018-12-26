import {applyMiddleware, createStore} from 'redux';
import promise from 'redux-promise';
import logger from 'redux-logger';
import reducer from "./reducer";

const state = {
	questions: [],
	currentQuestionIndex: 0,
	answers: []
};


export default createStore(reducer, state, applyMiddleware(promise, logger));