import React, {Component} from 'react';
import {connect} from 'react-redux';
import './index.css'
import {
	Layout,
	Spinner
} from "@codedojo/mdc-react";

// 01:05 time

import * as actions from '../store/actions';
import {bindActionCreators} from "redux";
import Quiz from "./Quiz";



class App extends Component {
	componentDidMount() {
		this.props.actions.getQuestions();
	}

	render() {
		const {
			question,
			numberOfQuestions,
			questionPosition,
			hasNextQuestion,
			quizProgress
		} = this.props;

		if (!question) {
			return <Spinner/>
		}

// TODO: refactor and remove props of quiz to Quiz component
		return (
			<Layout element="main">
				<Quiz
					question={question}
					numberOfQuestions={numberOfQuestions}
					questionPosition={questionPosition}
					progress={quizProgress}
				/>
			</Layout>
		);
	}
}

//add selectors to this code/ Place this code in selectors
export default connect(
	state => {
		const numberOfQuestions = state.questions.length;
		const question = state.questions[state.currentQuestionIndex];
		const questionPosition = state.currentQuestionIndex + 1;
		const hasNextQuestion = state.currentQuestionIndex < state.questions.length;
		const quizProgress = state.currentQuestionIndex / numberOfQuestions * 100;

		return {
			question: question,
			numberOfQuestions,
			questionPosition,
			hasNextQuestion,
			quizProgress
		}
	},

	dispatch => ({
		actions: bindActionCreators(actions, dispatch)
	})
)(App);