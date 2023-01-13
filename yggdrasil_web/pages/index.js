import Head from 'next/head'
import NavBar from './Components/NavBar.jsx';
import Main from './Components/Main.jsx';
import About from './Components/about.jsx';
import React, { Fragment } from 'react';

export default function Home() {
  return (
    <Fragment>
    <div>
      <Head>
        <title>Yggdrasil Rising</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
    </div>
    <NavBar />
    <Main />
    <About />
    </Fragment>


  )};
