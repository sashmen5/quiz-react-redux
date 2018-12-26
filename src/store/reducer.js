import * as actions from './actions';

export default function reducer(state, action) {
	switch (action.type) {
		case actions.GET_QUESTIONS:
			return {
				...state,
				questions: action.questions
			};
		default:
			return state;
	}
}