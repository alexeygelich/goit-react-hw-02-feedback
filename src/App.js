import React, { Component } from 'react';
import Statistics from './components/Statistics';
import FeedbackOptions from './components/FeedbackOptions';
import Section from './components/Section';
import Notification from './components/Notification';

class App extends Component {
  static defaultProps = {};

  static propTypes = {};

  state = {
    good: 0,
    neutral: 0,
    bad: 0,
    total: 0,
    PositivePercentage: 0,
  };

  counter = e => {
    let key = e.target.textContent.toLowerCase();
    this.setState({ [key]: this.state[key] + 1 });
    this.countTotalFeedback();
    this.countPositiveFeedbackPercentage();
  };

  countTotalFeedback = () => this.setState({ total: this.state.total + 1 });
  countPositiveFeedbackPercentage = () =>
    this.setState(prevState => ({
      PositivePercentage: Math.round((prevState.good * 100) / prevState.total),
    }));

  render() {
    const { good, neutral, bad, total, PositivePercentage } = this.state;
    return (
      <>
        <Section title="Please leave feedback">
          <FeedbackOptions
            options={this.counter}
            onLeaveFeedback={this.counter}
          />
        </Section>

        {this.state.total > 0 ? (
          <Section title="Statistics">
            <Statistics
              good={good}
              neutral={neutral}
              bad={bad}
              total={total}
              positivePercentage={PositivePercentage}
            />
          </Section>
        ) : (
          <Notification message="No feedback given" />
        )}
      </>
    );
  }
}

export default App;
