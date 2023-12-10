import { useEffect, useState } from "react";
import Section from "./Section/Section";
import FeedbackOptions from "./FeedbackOptions/FeedbackOptions";
import Statistics from "./Statistics/Statistics";

export const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const countTotalFeedback = () => {
    return (
      good +
      neutral +
      bad
    );
  };

  function countPositiveFeedbackPercentage() {
    return (
      (countTotalFeedback() > 0) ? (good / countTotalFeedback()) * 100 : 0
    );
  }

  useEffect(() => {
    console.log("good: ", good);
    console.log("neutral: ", neutral);
    console.log("bad: ", bad);
  }, [good, neutral, bad]);

  return (
    <>
      <Section title="Please leave feedback">
        <FeedbackOptions
          incGood={() => setGood(good + 1)}
          incNeutral={() => setNeutral(neutral + 1)}
          incBad={() => setBad(bad + 1)}
        />
      </Section>
      <Section title="Statistics">
        <Statistics
          good={good}
          neutral={neutral}
          bad={bad}
          total={countTotalFeedback()}
          positivePercentage={countPositiveFeedbackPercentage()}
        />
      </Section>
    </>
  );
};
