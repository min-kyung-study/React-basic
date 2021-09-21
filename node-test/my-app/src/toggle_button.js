import React from 'react';
import ReactDOM from 'react-dom';

class Toggle extends React.Component{
  constructor(props){
    super(props);
    this.state = {isToggleOn : true};
    //handleClick()콜백에서 this를 사용하기 위해 바인딩 해주었다
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    //console.log(this);
    this.setState(prevState => ({
      isToggleOn: !prevState.isToggleOn
    }));
  }

  render(){
    return (
      <button onClick={this.handleClick}>
        {this.state.isToggleOn ? 'ON' : 'OFF'}
      </button>
    );
  }
}

ReactDOM.render(
  <Toggle />,
  document.getElementById('root')
);

