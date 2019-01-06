import * as actions from './actions';

export default function reducer(state, action) {
	switch (action.type) {
		case actions.GET_QUESTIONS:
			return {
				...state,
				questions: action.questions,
				loading: false
			};

		case actions.COMMIT_ANSWER:
			return {
				...state,
				answers: [...state.answers, action.answer],
				currentQuestionIndex: state.currentQuestionIndex + 1
			};

		case actions.END_QUIZ:
			return {
				...state,
				loading: true
			};

		case actions.GET_RESULTS:
			return {
				...state,
				loading: false,
				results: action.results
			};

		case actions.GET_QUIZZES:
			return {
				...state,
				quizzesList: action.payload
			};
		case actions.GET_QUIZ:
			return {
				...state,
				singleQuiz: action.payload
			};

		case actions.UNSET_QUIZ:
			return {
				...state,
				singleQuiz: undefined
			};
		default:
			return state;
	}
}