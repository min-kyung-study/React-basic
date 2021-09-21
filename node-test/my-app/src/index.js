import React from 'react';
import ReactDOM from 'react-dom';

class Clock extends React.Component {
  //2. Clock의 constructor 호출
  //초기 this.state를 지정하는 constructor
  constructor(props){
    super(props);
    this.state = {date : new Date()};
  }

  //4. 생명주기메서드 호출
  //컴포넌트 출력물이 DOM에 렌더링 된 후에 실행
  componentDidMount() {
    this.timerId = setInterval(
      () => this.tick(),
    1000
    );
  }

  //7. Clock 컴포넌트가 DOM으로부터 한 번이라도 삭제된 적이 있다면 
  //React는 타이머를 멈추기 위해 componentWillUnmount() 생명주기 메서드를 호출
  componentWillUnmount() {
    clearInterval(this.timerId);
  }

  //5. 매초 브라우저가 tick 메서드 호출
  tick() {
    //setState 로 state변경
    this.setState({
      date : new Date()
    });
  }

  //6. React는 state가 변경된것을 인지하고 화면에 표시될 내용을 알아내기위해 
  //render()메서드 호출 ,render() 안의 this.state.date가 달라짐 -> DOM 업데이트
  //3. render() 메서드 호출
  render() {
    return (
      <div>
        <h1>Hello, world!</h1>
        <h2>It is {this.state.date.toLocaleTimeString()}.</h2>
      </div>
    )
  }
}

//1. render로 전달 Clock호출
ReactDOM.render(<Clock />,document.getElementById('root'));