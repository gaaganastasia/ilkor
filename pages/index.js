import React, { Component } from 'react';
// import { NextSeo } from 'next-seo';
// import ReactDOM from 'react-dom';
// import './index.css';
import App from './components/App/App';
import Head from 'next/head';
import Script from 'next/script';

export default class extends Component {
  render () {
    return (
      <React.StrictMode>
        <Head>
          <link rel="shortcut icon" href="../static/favicon.ico" />

          <Script
            dangerouslySetInnerHTML={{
              __html: `
              (function(m,e,t,r,i,k,a){m[i]=m[i]||function(){(m[i].a=m[i].a||[]).push(arguments)}; 
              m[i].l=1*new Date();k=e.createElement(t),a=e.getElementsByTagName(t)[0],k.async=1,k.src=r,a.parentNode.insertBefore(k,a)}) 
              (window, document, "script", "https://mc.yandex.ru/metrika/tag.js", "ym"); 
            
              ym(89240992, "init", { 
                   clickmap:true, 
                   trackLinks:true, 
                   accurateTrackBounce:true 
              }); 
          `,
            }}
          />
        </Head>
        <App />
      </React.StrictMode>
    )
  }
};