import React, { useEffect, useState } from "react";
import axios from 'axios'; // need axios library for API request
import CharacterCard from './CharacterCard';

export default function CharacterList() {
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
    <section className="character-list">
      {/* <h2>TODO: `array.map()` over your state here!</h2> */}
      <h2>Characters</h2>
      {persona.map((per) => {
        return (
          <CharacterCard key={per.name} 
          name={per.name} 
          image={per.image} 
          location={per.location} 
          status={per.status} 
          origin={per.origin} />
        )
      })}
    </section>
  );
}
