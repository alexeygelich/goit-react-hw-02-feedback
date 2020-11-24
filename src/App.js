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
  };

  counter = e => {
    let key = e.target.textContent.toLowerCase();
    this.setState( state=>({ [key]: state[key] + 1 }));
  };

  countTotalFeedback = total =>
    Object.values(total).reduce((acc, el) => acc + el);

  countPositiveFeedbackPercentage = (good,total) =>Math.round((good * 100) / total);


  render() {
    const { good, neutral, bad } = this.state;
    const total = this.countTotalFeedback(this.state);
    const PositivePercentage = this.countPositiveFeedbackPercentage(good,total);

    return (
      <>
        <Section title="Please leave feedback">
          <FeedbackOptions onLeaveFeedback={this.counter} />
        </Section>

        {total > 0 ? (
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
