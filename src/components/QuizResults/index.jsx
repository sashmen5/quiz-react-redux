import React from 'react';

import {
	Card,
	Typography
} from '@codedojo/mdc-react';

export default function QuizResults({results}) {
		return (
			<Card className="quiz-results">
				<Typography variant="headline4" align="center">Test finished</Typography>
				<Typography variant="headline4" align="center">You answered correct on {results.correct} of {results.total} questions</Typography>
			</Card>
		)
}