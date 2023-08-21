import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Contact from './components/Contact';
import About from './components/About';
import Home from './components/Home';
import NoPage from './components/NoPage';
import Photos from './components/Photos';
import { MyProvider, } from './context/myContext';

const App = () => {


    return(
        <MyProvider>
        <BrowserRouter>
        <div className='main-container'>
            <Header />
        <Routes>
                <Route exact path='/'Component={ Home }/>
                <Route  path='/about'Component={ About }/>
                <Route  path='/contact'Component={ Contact }/>
                <Route  path='/photos'Component={ Photos }/>
                <Route  path='*'Component={ NoPage }/>
        </Routes>
            <Footer />
        </div>
        </BrowserRouter>
        </MyProvider>
    )
}

export default App;