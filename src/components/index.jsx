import React, {Component} from 'react';
import {connect} from 'react-redux';
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
	Radio
} from "@codedojo/mdc-react";

// 01:05 time

import * as actions from '../store/actions';
import {bindActionCreators} from "redux";

class App extends Component {
	componentDidMount() {
		this.props.actions.getQuestions();
	}

	render() {
		return (
			<Layout element="main">
				<Card>
					<CardHeader
						title="Test knowledge JavaSript"
						subtitle="Question 1 of 5">
					</CardHeader>
					<LinearProgress value="25"/>

					<CardSection primary>
						<Typography>Text of question</Typography>
						<List>
							<ListItem>
								<ListItemGraphic>
									<Radio/>
								</ListItemGraphic>
								<Typography>Varius of answers</Typography>
							</ListItem>

							<ListItem>
								<ListItemGraphic>
									<Radio/>
								</ListItemGraphic>
								<Typography>Varius of answers</Typography>
							</ListItem>

							<ListItem>
								<ListItemGraphic>
									<Radio/>
								</ListItemGraphic>
								<Typography>Varius of answers</Typography>
							</ListItem>
						</List>
					</CardSection>



				</Card>

			</Layout>
		);
	}
}


export default connect(
	state => ({
		questions: state.questions
	}),

	dispatch => ({
		actions: bindActionCreators(actions, dispatch)
	})
)(App);