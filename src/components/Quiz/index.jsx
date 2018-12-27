import React, {Component} from 'react';

import {
	Card,
	CardHeader,
	CardActions,
	CardAction,
	Button,
	LinearProgress,
} from '@codedojo/mdc-react';

import QuizQuestion from "../QuizQuestion";

export default class Quiz extends Component {
	state = {
		answer: undefined
	};

	handleAnswer = index => {
		this.setState({answer: index})
	};

	handleNexButtonClick = () => {
		this.setState({answer: undefined});
		this.props.onAnswer(this.state.answer);
	};

	render() {
		const {
			question,
			questionPosition,
			numberOfQuestions,
			progress,
		} = this.props;

		const {answer} = this.state;

		return (
			<Card>
				<CardHeader
					title="Test knowledge JavaSript"
					subtitle={`Question ${questionPosition} of ${numberOfQuestions}`}>
				</CardHeader>
				<LinearProgress value={progress}/>
				<QuizQuestion
					question={question}
					answer={answer}
					onAnswer={this.handleAnswer}
				/>
				<CardActions>
					<CardAction>
						<Button onClick={this.handleNexButtonClick}>Next</Button>
					</CardAction>
				</CardActions>
			</Card>
		)
	}

}