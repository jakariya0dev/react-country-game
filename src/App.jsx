
import './App.css'
import React, { useState, useEffect } from 'react'
import Countries from './components/Countries'
import Country from './components/Country'
import HomePage from './components/HomePage'
import GamePage from './components/GamePage'
import SummeryPage from './components/SummeryPage'



function App() {

  const [page, setPage] = useState('home-page')
  const [country, setCountry] = useState({})
  const [allCountry, setAllCountry] = useState([]);
  const [summeryData, setSummeryData] = useState({});


  useEffect(() => {
      fetch('https://restcountries.com/v3.1/all')
      .then(res => res.json())
      .then(res => {
        setAllCountry(res.sort(() => Math.random() - 0.5));
        setBestScore();
      });
  },[page]);


  function setBestScore(){

    if(localStorage.getItem('best-score') == null){
      localStorage.setItem('best-score', '0')
    }

  }


  if(page === 'home-page') {
    return (<HomePage allCountry={allCountry} setPage={setPage} setCountry={setCountry} setSummeryData={setSummeryData}/>)
  }
  else if(page === 'countries-page'){
    return (<Countries allCountry={allCountry} setPage={setPage} setCountry={setCountry}/>)
  }
  else if(page === 'country-page') {
    return(<Country setPage={setPage} country={country}/> )
  }
  else if(page === 'game-page') {
    return(<GamePage setPage={setPage} allCountry={allCountry} setSummeryData={setSummeryData} /> )
  }
  else if(page === 'summery-page') {
    return(<SummeryPage setPage={setPage} summeryData={summeryData} /> )
  }
}

export default App
