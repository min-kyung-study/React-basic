import React from 'react';
import ReactDOM from 'react-dom';

function Welcome(props) {
  return <h1>Hi, {props.name}</h1>;
}

function App() {
  return (
    <div>
      <Welcome name="Kim" />
      <Welcome name="Ming" />
      <Welcome name="Kyung" />
    </div>
  );
}

// const element = <Welcome name="Ming"/>;

ReactDOM.render(<App />,document.getElementById("root"));