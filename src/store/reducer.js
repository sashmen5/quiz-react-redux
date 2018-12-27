import * as actions from './actions';

export default function reducer(state, action) {
	switch (action.type) {
		case actions.GET_QUESTIONS:
			return {
				...state,
				questions: action.questions
			};

		case actions.COMMIT_ANSWER:
			return {
				...state,
				answers: [...state.answers, action.answer],
				currentQuestionIndex: state.currentQuestionIndex + 1
			};
		default:
			return state;
	}
}