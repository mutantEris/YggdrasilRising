import Head from 'next/head'
import styles from './_app';
import Navbar from './Components/NavBar.jsx';
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
    <Navbar />
    </Fragment>

  )};
