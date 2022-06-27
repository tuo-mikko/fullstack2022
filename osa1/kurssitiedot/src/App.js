const App = () => {
  const course = {
    name: 'Half Stack application development',
    parts: [
      {
        name: 'Fundamentals of React',
        exercises: 10,
      },
      {
        name: 'Using props to pass data',
        exercises: 7,
      },
      {
        name: 'State of a component',
        exercises: 14,
      },
    ],
  };

  const Header = (props) => {
    return <h1>{props.course.name}</h1>;
  };

  const Content = (props) => {
    return props.course.parts.map((part) => (
      <Part name={part.name} exercises={part.exercises} />
    ));
  };

  const Part = (props) => {
    return (
      <p>
        {props.name} {props.exercises}
      </p>
    );
  };

  const Total = (props) => {
    let totalAmount = 0;

    props.course.parts.forEach((part) => {
      totalAmount += part.exercises;
    });
    return <p>Number of exercises {totalAmount}</p>;
  };

  return (
    <div>
      <Header course={course} />
      <Content course={course} />
      <Total course={course} />
    </div>
  );
};

export default App;
