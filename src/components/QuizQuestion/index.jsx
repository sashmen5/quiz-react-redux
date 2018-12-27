import React from 'react';

import {
	CardSection,
	List,
	ListItem,
	ListItemGraphic,
	Radio,
	Typography
} from '@codedojo/mdc-react';

import markdown from '../../markdown';

export default function QuizQuestion({question, answer, onAnswer}) {
	return (
		<CardSection primary>
			<Typography dangerouslySetInnerHTML={{__html: markdown.render(question.text)}}>{}</Typography>
			<List>
				{
					question.options.map((option, index) =>
						<ListItem
							key={index}
							onClick={() => onAnswer(index)}
						>
							<ListItemGraphic>
								<Radio
									value={index}
									checked={answer === index}
								/>
							</ListItemGraphic>
							<Typography dangerouslySetInnerHTML={{__html: markdown.render(option)}}>{}</Typography>
						</ListItem>
					)
				}
			</List>
		</CardSection>
	)
}