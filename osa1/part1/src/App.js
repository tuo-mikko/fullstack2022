const Hello = (props) => {
  return (
    <div>
      {' '}
      <p>Hello {props.name}</p>{' '}
    </div>
  );
};
const App = () => {
  return (
    <div>
      <Hello name="Maya" />
      <Hello name="Pekka" />
    </div>
  );
};
export default App;
