import React, { Component } from 'react';
import { Box } from './Styled/Box';
import { Statistics } from './Statistics/Statistics';
import { FeedbackOptions } from './Feedback/FeedbackOptions';
import { Section } from './Section/Section';
import { Notification } from './Notification/Notification';

export class App extends Component {

	state = {
    good: 0,
    neutral: 0,
    bad: 0
  };

	hendlerIncrement = key => {
    this.setState(prevState => ({
      [key]: prevState[key] + 1,
    }));
  }

	countTotalFeedback = () => { 
    const totalFeeds = Object.values(this.state).reduce((acc, feed) => acc + feed, 0);
    return totalFeeds;
    };

		countPositiveFeedbackPercentage = () => {
    let positiveValue = this.state.good / this.countTotalFeedback() * 100;
    return Math.round(positiveValue);
    };	

	render () {
			const { good, neutral, bad } = this.state;
			return (
				<Box
        display="flex"
        flexDirection="column"
        listStyle="none"
        mr="20px"
        mt="20px"
        p="0">
					<Section 
					title='Please leave feedback'>
					<FeedbackOptions options={ Object.keys(this.state) } onSendFeedback={this.hendlerIncrement} />
					</Section>

					<Section title={"Statistics"}>
					{this.countTotalFeedback() ? (
						<Statistics
						good={good}
						neutral={neutral}
						bad={bad}
						total={this.countTotalFeedback()}
						positiveValue={this.countPositiveFeedbackPercentage()}
						/>
					) : (
						<Notification message={"There is no feedback"} />
					)}
					</Section>
				</Box>
			);
	}
};