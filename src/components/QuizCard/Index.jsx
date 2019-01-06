import React from 'react';
import {Link} from 'react-router-dom';

import {
	Card,
	CardHeader,
	Avatar,
	Icon,
	Typography,
	CardSection,
	CardActions,
	CardAction,
	Button
} from '@codedojo/mdc-react';


export default function QuizCard({quiz, ...props}) {
	return (
		<Card clasName={`quiz-card topic-card theme-${quiz.topic.id}`} {...props}>
			<CardHeader
				graphic={<Avatar src={`/img/topics/${quiz.topic.id}.svg`}/>}
				title={quiz.title}
				action={quiz.isCompleted && <Icon title='Test completed'>check</Icon>}
			/>

			<CardSection primary>
				<Typography variant='body2' noMargin>{quiz.description}</Typography>
			</CardSection>

			<CardActions>
				<CardAction button>
					<Button component={Link} to={quiz.url}>More...</Button>
				</CardAction>
			</CardActions>
		</Card>
	)
}