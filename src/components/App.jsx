import { useState } from 'react';
import { Section } from './Section/Section';
import { FeedbackOptions } from './FeedbackOptions/FeedbackOptions';
import { Statistics } from './Statistics/Statistics';
import { Notification } from './Notification/Notification';
import { Container } from './Container/Container.styled';

const OPTION = ['good', 'neutral', 'bad'];

export const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const total = good + neutral + bad;
  const countPositiveFeedbackPercentage = Math.round((good / total) * 100);

  const addFeedback = comment => {
    switch (comment) {
      case 'good':
        setGood(pS => pS + 1);
        break;
      case 'neutral':
        setNeutral(pS => pS + 1);
        break;
      case 'bad':
        setBad(pS => pS + 1);
        break;
      default:
        console.log(`Такого варианта: ${comment}, нет.`);
        break;
    }
  };

  return (
    <Container>
      <Section title="Please leave feedback">
        <FeedbackOptions options={OPTION} onLeaveFeedback={addFeedback} />
      </Section>

      <Section title={'Statistic'}>
        {total === 0 ? (
          <Notification message={'There is no feedback'} />
        ) : (
          <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            total={total}
            positivePercentage={countPositiveFeedbackPercentage}
          />
        )}
      </Section>
    </Container>
  );
};
