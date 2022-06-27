const App = () => {
  const course = 'Half Stack application development';
  const part1 = 'Fundamentals of React';
  const exercises1 = 10;
  const part2 = 'Using props to pass data';
  const exercises2 = 7;
  const part3 = 'State of a component';
  const exercises3 = 14;

  const Header = (props) => {
    return <h1>{props.text}</h1>;
  };

  const Content = (props) => {
    console.log(props.texts[0]);
    return (
      <div>
        <Part text={props.texts[0]} exerciseAmount={props.exerciseAmounts[0]} />
        <Part text={props.texts[1]} exerciseAmount={props.exerciseAmounts[1]} />
        <Part text={props.texts[2]} exerciseAmount={props.exerciseAmounts[2]} />
      </div>
    );
  };

  const Part = (props) => {
    return (
      <p>
        {props.text} {props.exerciseAmount}
      </p>
    );
  };

  const Total = (props) => {
    return <p>Number of exercises {props.totalExcercises}</p>;
  };

  return (
    <div>
      <Header text={course} />
      <Content
        texts={[part1, part2, part3]}
        exerciseAmounts={[exercises1, exercises2, exercises3]}
      />
      <Total totalExcercises={exercises1 + exercises2 + exercises3} />
    </div>
  );
};

export default App;
