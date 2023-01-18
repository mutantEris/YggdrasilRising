import Head from 'next/head'
import NavBar from '/pages/Components/NavBar.jsx';
// import Main from '/pages/Main.jsx';
// import About from '/pages/about.jsx';
// import Gallery from '/pages/gallery.jsx';
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
    {/* <Main /> */}
    {/* <About /> */}
    {/* <Gallery /> */}
    </Fragment>


  )};
