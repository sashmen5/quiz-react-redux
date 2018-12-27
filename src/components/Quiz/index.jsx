import React, {Component} from 'react';

import {
	Card,
	CardHeader,
	LinearProgress,
} from '@codedojo/mdc-react';

import markdown from '../../markdown';
import QuizQuestion from "../QuizQuestion";

export default class Quiz extends Component {
	render() {
		const {
			question,
			questionPosition,
			numberOfQuestions,
			progress,
		} = this.props;

		return (
			<Card>
				<CardHeader
					title="Test knowledge JavaSript"
					subtitle={`Question ${questionPosition} of ${numberOfQuestions}`}>
				</CardHeader>
				<LinearProgress value={progress}/>
				<QuizQuestion
					question={question}
				/>
			</Card>
		)
	}

}