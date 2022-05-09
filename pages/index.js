import React, { Component } from 'react';
// import { NextSeo } from 'next-seo';
// import ReactDOM from 'react-dom';
// import './index.css';
import App from './components/App/App';
import Head from 'next/head';

export default class extends Component {
  render () {
    return (
      <React.StrictMode>
        <Head>
          <link rel="shortcut icon" href="../static/favicon.ico" />
        </Head>
        <App />
      </React.StrictMode>
    )
  }
};