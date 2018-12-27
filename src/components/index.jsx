import React, {Component} from 'react';
import {connect} from 'react-redux';
import './index.css'
import {
	Layout,
	Spinner
} from "@codedojo/mdc-react";

// 01:40 time

import * as actions from '../store/actions';
import {bindActionCreators} from "redux";
import Quiz from "./Quiz";
import QuizResults from "./QuizResults";



class App extends Component {
	componentDidMount() {
		this.props.actions.getQuestions();
	}

	handleComplete = () => {
		this.props.actions.endQuiz();
		this.props.actions.getResults(this.props.answers);
	};

	handleAnswer = answer => {
		this.props.actions.commitAnswer(answer)
	};

	render() {
		const {
			loading,
			question,
			numberOfQuestions,
			questionPosition,
			hasNextQuestion,
			quizProgress,
			results
		} = this.props;

		if (loading) {
			return <Spinner/>
		}

// TODO: refactor and remove props of quiz to Quiz component
		return (
			<Layout element="main">
				{
					results ?
						<QuizResults
							results={{correct: 5, total: 10}}
						/>
						:
						<Quiz
							question={question}
							numberOfQuestions={numberOfQuestions}
							questionPosition={questionPosition}
							progress={quizProgress}
							onAnswer={this.handleAnswer}
							hasNextQuestion={hasNextQuestion}
							onComplete={this.handleComplete}
						/>
				}

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

			answers: state.answers,
			loading: state.loading,
			results: state.results,
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