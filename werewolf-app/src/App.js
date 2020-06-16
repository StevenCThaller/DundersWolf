import React, { useState, useEffect } from 'react';
import logo from './imgs/wolf.png';
import './App.css';
import linkedin16 from './imgs/linkedin16.png';
import github16 from './imgs/github16.png';
import resume16 from './imgs/resume16.png';
import Footer from './components/Footer';
import Header from './components/Header';
import { SlideDown } from 'react-slidedown';
import 'react-slidedown/lib/slidedown.css';
import Loading from './components/Loading';

function App() {
  const [loading, setLoading] = useState(true);
  const [fadeLoad, setFadeLoad] = useState(false);

  const toggleFade = () => {
    // setLoading(false);
    setFadeLoad(true);
    setTimeout(toggleLoad, 1500);
  }

  const toggleLoad = () => {
    setLoading(false);
  }

  
  useEffect(() => {
    // const fade = setTimeout(() => {
    //   toggleLoad();
    // }, 1500);

    const timer = setTimeout(() => {
      console.log("loading...")
      // fade();
      setTimeout(toggleFade, 1500);
    }, 2000);

    return () => {
      timer();
    }
  }, []);

  return (
    <>
    {
      loading ?
      '' :
      <SlideDown>
          <Header headerText={"Dunders Wolves"}/>
      </SlideDown>
    }
    <main className="container">
    {
      loading ?
      <Loading logo={logo} fade={fadeLoad}/>
      : ''
    }
    </main>
    {
      loading ? 
      '' :
      <Footer idName="myFooter" linkedin={ linkedin16 } github={ github16 } resume={ resume16 }/>
    }
    </>
  );
}

export default App;
