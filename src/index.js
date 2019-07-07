import './test';
import React from 'react';
import ReactDOM from 'react-dom';

console.log('Welcome to my webpack setup');

const MyComponent = () => <div>This is a React component!</div>;

ReactDOM.render(<MyComponent />, document.getElementById('root'));
