import React from 'react'
import Header from '../../components/Header';
import Main from './Main';
import Footer from '../../components/Footer';

const Home = () => {
  return (
    <div className="flex flex-col min-h-screen">
        <Header />
        <Main />
        <Footer />
    </div>
  )
}

export default Home;