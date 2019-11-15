import React from "react";
import CharacterCard from './CharacterCard';

export default function CharacterList(props) {
  

  return (
    <section className="character-list">
      {/* <h2>TODO: `array.map()` over your state here!</h2> */}
      <h2>Characters</h2>
      <h3>
      {props.persona.map((per) => {
        return (
          <CharacterCard key={per.id} 
          name={per.name} 
          image={per.image} 
          location={per.location} 
          status={per.status} 
          origin={per.origin} />
        )
      })}
      </h3>
    </section>
  );
}
