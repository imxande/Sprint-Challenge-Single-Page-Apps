
import Header from "./components/Header.js";
import CharacterList from './components/CharacterList';
import WelcomePage from "./components/WelcomePage.js";
import {Route} from "react-router-dom";
// import LocationsList from './components/LocationsList';
import React, { useEffect, useState } from "react";
import axios from 'axios'; // need axios library for API request
import SearchForm from './components/SearchForm';



export default function App() {
  // TODO: Add useState to track data from useEffect
  const [ persona, setPersona ] = useState([]);

  useEffect(() => {
    // TODO: Add API Request here - must run in `useEffect`
    //  Important: verify the 2nd `useEffect` parameter: the dependancies array!
    axios.get('https://rickandmortyapi.com/api/character/')
  .then((response) => {
    setPersona(response.data.results);
    console.log(response.data.results);
  })
  }, []);

  return (
    <main>

      <Header />
      
      <Route exact path='/' component={WelcomePage}/>
      <Route exact path='/characters' render={props=><CharacterList {...props} persona= {persona} />}/>
      <Route exact path="/search" render={props=><SearchForm {...props} persona= {persona} />}/>
      
    </main>
  );
}
