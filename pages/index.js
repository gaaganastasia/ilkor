import React, { Component } from 'react';
// import { NextSeo } from 'next-seo';
// import ReactDOM from 'react-dom';
// import './index.css';
import App from './components/App/App';

export default class extends Component {
  render () {
    return (
      <React.StrictMode>
        <App />
      </React.StrictMode>
    )
  }
};