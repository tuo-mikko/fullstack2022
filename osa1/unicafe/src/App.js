import { useState } from 'react';

const Statistics = ({ good, neutral, bad, total, average, positives }) => {
  if (total == 0) {
    return <p>No feedback given</p>;
  }
  return (
    <div>
      <StatisticLine text="Good" value={good} />
      <StatisticLine text="Bad" value={bad} />
      <StatisticLine text="Neutral" value={neutral} />
      <StatisticLine text="Total" value={total} />
      <StatisticLine text="Averages" value={average} />
      <StatisticLine text="Positives" value={positives} suffix="%" />
    </div>
  );
};

const Button = ({ text, handleClick }) => {
  return <button onClick={handleClick}>{text}</button>;
};

const StatisticLine = ({ text, value, suffix = '' }) => {
  return (
    <p>
      {text} {value} {suffix}
    </p>
  );
};

const App = () => {
  // tallenna napit omaan tilaansa

  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);
  const [average, setAverage] = useState(0);
  const [total, setTotal] = useState(0);
  const [positives, setPositives] = useState(0);

  const handleAverage = (good, bad, total) => {
    setAverage((good - bad) / total);
  };

  const handlePositives = (good, total) => {
    setPositives((good / total) * 100);
  };

  const handleGood = () => {
    setGood(good + 1);
    setTotal(total + 1);
    handleAverage(good + 1, bad, total + 1);
    handlePositives(good + 1, total + 1);
  };

  const handleNeutral = () => {
    setNeutral(neutral + 1);
    setTotal(total + 1);
    handleAverage(good, bad, total + 1);
    handlePositives(good, total + 1);
  };

  const handleBad = () => {
    setBad(bad + 1);
    setTotal(total + 1);
    handleAverage(good, bad + 1, total + 1);
    handlePositives(good, total + 1);
  };

  return (
    <>
      <h2>Give feedback</h2>
      <Button text={'Good'} handleClick={handleGood} />
      <Button text={'Neutral'} handleClick={handleNeutral} />
      <Button text={'Bad'} handleClick={handleBad} />
      <h2>Statistics</h2>
      <Statistics
        good={good}
        neutral={neutral}
        bad={bad}
        total={total}
        average={average}
        positives={positives}
      />
    </>
  );
};

export default App;
