import React from 'react';
import ReactDOM from 'react-dom';
import './test';
import App from './components/App';

console.log('Welcome to my webpack setup');

const MyComponent = () => (
  <div>
    This is a React component!
    <App />
  </div>
);

ReactDOM.render(<MyComponent />, document.getElementById('root'));
