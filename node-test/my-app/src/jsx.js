import React from 'react';
import ReactDOM from 'react-dom';

// const name = "Ming";
// const element = <h1>hello, My name is {name} </h1>;

// ReactDOM.render(
//   element, document.getElementById("root")
// )

//JSX의 중괄호 안에는 유효한 모든 javascript 표현식을 넣을 수 있다.
function formatName(user) {
  return user.firstName + ' ' + user.lastName;
}

function getGreeting(user) {
  if(user) {
    return <h1>Hi, {formatName(user)}. </h1>;
  }
  return <h1>Hello, Stranger.</h1>
}

const user = {
  firstName : 'Ming',
  lastName : 'Kim'
}

const element = (
  <h1>
    Hi, {formatName(user)}!
  </h1>
);

// const element = (
//   <h1>{getGreeting(user)}</h1>
// );

ReactDOM.render(element,document.getElementById("root"));