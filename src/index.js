import './test';
import React from 'react';
import { render } from 'react-dom';

console.log('Welcome to my webpack setup');

const MyComponent = () => {
  return <div>This is a React component</div>;
};

render(<MyComponent />, document.getElementById('root'));
