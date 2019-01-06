import React, {Component} from 'react';
import {Route, Switch} from 'react-router-dom';

import Quizzes from './Quizzes';
import Quiz from '../Quiz';

export default class CourseRouter extends Component {
	render() {
		return (
			<Switch>
				<Route exact path='/quizzes' component={Quizzes}/>
				<Route exact path='/quizzes/:quiz' component={Quiz}/>
			</Switch>
		);
	}
}