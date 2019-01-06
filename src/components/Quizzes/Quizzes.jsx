import React, {Component} from 'react';
import {connect} from 'react-redux';
import {
	LayoutGrid, LayoutGridCell,
	LinearProgress
} from '@codedojo/mdc-react';

import QuizCard from '../QuizCard';
import {bindActionCreators} from "redux";

class Quizzes extends Component {
	componentDidMount() {
		if (this.props.quizzes.length === 0) {
			this.props.actions.getQuiz();
		}

		this.props.actions.unsetQuiz();
	}

	render() {
		const {quizzes} = this.props;

		return (
			<AppContent>
				<AppHeader
					title='Quizzes'
					fixed
				/>

				<Page id='quizzes-page' title='Quizzes'>
					<PageContent>
						<LayoutGrid>
							{quizzes.map(quiz =>
								<LayoutGridCell key={quiz.id} span={4}>
									<QuizCard quiz={quiz}/>
								</LayoutGridCell>
							)}
						</LayoutGrid>
					</PageContent>
				</Page>
			</AppContent>
		)
	}
}

export default  connect(
	state => ({
		quizzes: state.quizzes
	}),

	dispatch => ({
		actions: bindActionCreators(actions, dispatch)
	})
)(Quizzes)