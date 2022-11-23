import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';
import Country from './components/Country/Country';
import Addcountry from './components/Addcountry/Addcountry';

function App() {
  const [country,setCountry]=useState([]);
  const [addedcountry,setAddedcountry]=useState([]);
  useEffect(()=>{
    fetch('https://restcountries.com/v3.1/all')
    .then(res => res.json())
    .then(data => setCountry(data))
  }, []);
  const addEventHandler = (country)=> {
    const newAddedCountry = [...addedcountry, country];
    setAddedcountry(newAddedCountry);
  };

  return (
    <div className="App">
      <h1>Data loaded: {country.length} </h1>
      <Addcountry addedcountry={addedcountry} ></Addcountry>
      <ul>
        {country.map(country => <Country country={country} addEventHandler={addEventHandler}></Country>)}
      </ul>
    </div>
  );
}

export default App;
