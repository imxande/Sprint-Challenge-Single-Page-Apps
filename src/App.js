import React from "react";
import Header from "./components/Header.js";
import CharacterList from './components/CharacterList';
import WelcomePage from "./components/WelcomePage.js";
import {Route} from "react-router-dom";
import LocationsList from './components/LocationsList';



export default function App() {
  return (
    <main>
      <Header />
      <Route exact path='/' component={WelcomePage}/>
      
      
    </main>
  );
}
