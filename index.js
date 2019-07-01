import React, { Component } from 'react';
import { render } from 'react-dom';
import App from './App';

setInterval(() => {
  render(<App date={new Date()} />, document.getElementById('root'))
}, 500);