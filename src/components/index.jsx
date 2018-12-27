import React, {Component} from 'react';
import {connect} from 'react-redux';
import Markdown from 'markdown-it';
import './index.css'
import {
	Layout,
	Card,
	CardHeader,
	CardSection,
	LinearProgress,
	Typography,
	List,
	ListItem,
	ListItemGraphic,
	Radio,
	Spinner
} from "@codedojo/mdc-react";

// 01:05 time

import * as actions from '../store/actions';
import {bindActionCreators} from "redux";

const markdown = new Markdown({html: true});

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

		return (
			<Layout element="main">
				<Card>
					<CardHeader
						title="Test knowledge JavaSript"
						subtitle={`Question ${questionPosition} of ${numberOfQuestions}`}>
					</CardHeader>
					<LinearProgress value={quizProgress}/>

					<CardSection primary>
						<Typography dangerouslySetInnerHTML={{__html: markdown.render(question.text)}}>{}</Typography>
						<List>
							{
								question.options.map((option, index) =>
									<ListItem key={index}>
										<ListItemGraphic>
											<Radio/>
										</ListItemGraphic>
										<Typography dangerouslySetInnerHTML={{__html: markdown.render(option)}}>{}</Typography>
									</ListItem>
								)
							}
						</List>
					</CardSection>
				</Card>
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