import React from 'react';
import Head from "next/head";
import Header from "../Components/Header";


const Home = () => {
  return (
    <React.Fragment>
      <Head>
        <title>Home</title>
      </Head>
      <Header />
    </React.Fragment>
  )
}

export default Home;