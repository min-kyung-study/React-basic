import React from 'react';
import ReactDOM from 'react-dom';

const numbers = [1,2,3,4,5,6];
const listItems = numbers.map(function(numbers){
 return <li>{numbers}</li>;
});
ReactDOM.render(
  <ul>{listItems}</ul>,
  document.getElementById('root')
);

//.map() 배열의 모든 값들을 순환
// Array.map(callback(current value, index, array), this)
//current value // 현재 반환할 값
//index -> <Option> 현재 해당하는 인덱스의 값
//array -> <Option> 배열에 접근 가능
//this -> <Option> 사용할 this 키워드의 값