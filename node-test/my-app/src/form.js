import React from 'react';
import ReactDOM from 'react-dom';

function Form() {
	function handleSubmit(e) {
		e.preventDefault();
		console.log( 'clicked submit' );
	}
	
	return(
		<form onSubmit={handleSubmit}>
			<button type="submit">submit</button>
		</form>
	);

}

ReactDOM.render(
  <Form />,
  document.getElementById('root')
);

