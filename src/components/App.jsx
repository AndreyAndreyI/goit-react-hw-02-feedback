import React, { Component } from 'react';
import { Statistics } from './Statistics/Statistics';
import { FeedbackOptions } from './FeedbackOptions/FeedbackOptions';
import { Section } from './Section/Section';

export default class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  countTotalFeedback = () => {
    const { good, neutral, bad } = this.state;
    const total = good + neutral + bad;
    return total;
  };

  countPositiveFeedbackPercentage = () => {
    const { good } = this.state;
    const positivePercentage = (good * 100) / this.countTotalFeedback();
    return Math.round(positivePercentage);
  };

  leaveReview = event => {
    const key = event.target.name;

    this.setState(prevState => ({
      [key]: prevState[key] + 1,
    }));
  };

  render() {
    return (
      <div style={{ margin: 60, width: 600, padding: 10, marginInline: 'auto', border: '.5px solid grey' }}>
        <Section>
          <h2 style={{ textAlign: 'center' }}>Please leave feedback</h2>
          <FeedbackOptions
            options={['good', 'neutral', 'bad']}
            onLeaveFeedback={this.leaveReview}
          />
        </Section>
        <Section>
          <h2 style={{ textAlign: 'center' }}>Statistics</h2>
          {this.countTotalFeedback() !== 0 ? (
            <Statistics
              good={this.state.good}
              neutral={this.state.neutral}
              bad={this.state.bad}
              total={this.countTotalFeedback()}
              positivePercentage={this.countPositiveFeedbackPercentage()}
            />
          ) : (
            <p style={{ textAlign: 'center' }}>No feedback given yet</p>
          )}
        </Section>
      </div>
    );
  }
}