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

	handleCompleteButtonClick = () => {
		this.setState({answer: undefined});
		this.props.onComplete();
	};

	render() {
		const {
			question,
			questionPosition,
			numberOfQuestions,
			progress,
			hasNextQuestion
		} = this.props;

		const {answer} = this.state;

		return (
			<Card>
				<CardHeader
					title="Test knowledge JavaSript"
					subtitle={hasNextQuestion && `Question ${questionPosition} of ${numberOfQuestions}`}>
				</CardHeader>

				<LinearProgress value={progress}/>

				{
					question &&
					<QuizQuestion
						question={question}
						answer={answer}
						onAnswer={this.handleAnswer}
					/>
				}

				<CardActions>
					<CardAction>
						{hasNextQuestion ?
							<Button onClick={this.handleNexButtonClick}>Next</Button>
							:
							<Button onClick={this.handleCompleteButtonClick}>Complete</Button>
						}
					</CardAction>
				</CardActions>
			</Card>
		)
	}
}

//TODO: make button disabled