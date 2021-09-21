import React from 'react';
import ReactDOM from 'react-dom';

function Mailbox(props) {
  const unreadMessages = props.unreadMessages;
  return (
    <div>
      <h1>hello</h1>
      {unreadMessages.length > 0 &&
        <h2>
          you have {unreadMessages.length} unread messages.
        </h2>
      }
    </div>
  );
}

const messages = ['React' ,'Ming' , 'Hi'];

ReactDOM.render(
  <Mailbox unreadMessages={messages} />,
  document.getElementById('root')
);

//hello
//you have 3 unread messages.

