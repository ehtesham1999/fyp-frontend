import React,{useState} from 'react'
import Navbar from '../components/Navbar';
import Sidebar from '../components/Sidebar';
import InfoSection from '../components/InfoSection';
import HeroSection from '../components/HeroSelection';
import Services from '../components/Services';
import Footer from '../components/Footer';
import Category from '../components/Category';
import {homeObjOne,homeObjThree} from '../components/InfoSection/Data';
import Electronics from '../components/Electronics';
import Sports from '../components/Sports';
import Cellphones from '../components/Cellphones';
import {BrowserRouter as Router ,Route , Switch} from 'react-router-dom'

const Home = () => {
    const [isOpen,setIsOpen] =useState(false);

    const toggle =()=>{
        setIsOpen(!isOpen)
    }
    return (
        <>
        
            <Sidebar isOpen={isOpen} toggle={toggle} />
            <Navbar toggle={toggle}/>
            <HeroSection/>
            
            <Router>
            <Category/>

            <Switch>
                <Route path='/electronics'>
                    <Electronics 
                     getpopular='https://recommender-fyp.herokuapp.com/electronics/getpopular'
                     getsearchimgdata= 'https://recommender-fyp.herokuapp.com/electronics/getsearchimgdata'
                     getdata='https://recommender-fyp.herokuapp.com/electronics/getdata'
                     getrecommendations='https://recommender-fyp.herokuapp.com/electronics/getrecommendations'
                     getsimilarimage='https://recommender-fyp.herokuapp.com/electronics/getsimilarimage'
                    />
                </Route>

                <Route path='/sports'>
                <Sports 
                     getpopular='https://recommender-fyp.herokuapp.com/electronics/getpopular'
                     getsearchimgdata= 'https://recommender-fyp.herokuapp.com/electronics/getsearchimgdata'
                     getdata='https://recommender-fyp.herokuapp.com/electronics/getdata'
                     getrecommendations='https://recommender-fyp.herokuapp.com/electronics/getrecommendations'
                     getsimilarimage='https://recommender-fyp.herokuapp.com/electronics/getsimilarimage'
                    />
               
                </Route>

                <Route path='/kitchen'>
                <Electronics 
                     getpopular='https://recommender-fyp.herokuapp.com/electronics/getpopular'
                     getsearchimgdata= 'https://recommender-fyp.herokuapp.com/electronics/getsearchimgdata'
                     getdata='https://recommender-fyp.herokuapp.com/electronics/getdata'
                     getrecommendations='https://recommender-fyp.herokuapp.com/electronics/getrecommendations'
                     getsimilarimage='https://recommender-fyp.herokuapp.com/electronics/getsimilarimage'
                    />
               
                </Route>

                <Route path='/cellphone'>
                <Cellphones 
                     getpopular='https://recommender-fyp.herokuapp.com/electronics/getpopular'
                     getsearchimgdata= 'https://recommender-fyp.herokuapp.com/electronics/getsearchimgdata'
                     getdata='https://recommender-fyp.herokuapp.com/electronics/getdata'
                     getrecommendations='https://recommender-fyp.herokuapp.com/electronics/getrecommendations'
                     getsimilarimage='https://recommender-fyp.herokuapp.com/electronics/getsimilarimage'
                    />
               
                </Route>

                <Route path='/fashion'>
                <Electronics 
                     getpopular='https://recommender-fyp.herokuapp.com/electronics/getpopular'
                     getsearchimgdata= 'https://recommender-fyp.herokuapp.com/electronics/getsearchimgdata'
                     getdata='https://recommender-fyp.herokuapp.com/electronics/getdata'
                     getrecommendations='https://recommender-fyp.herokuapp.com/electronics/getrecommendations'
                     getsimilarimage='https://recommender-fyp.herokuapp.com/electronics/getsimilarimage'
                    />
               
                </Route>  

            </Switch>
            </Router>
            
            <InfoSection {...homeObjOne}/>
            {/* <InfoSection {...homeObjTwo}/> */}
            <Services/>
            <InfoSection {...homeObjThree}/>
            <Footer/>
        </>
    )
}

export default Home;

// from flask import Flask
// import pandas as pd
// from flask import request
// import json
// from flask_cors import CORS 
// app = Flask(__name__)
// CORS(app)
