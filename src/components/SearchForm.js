import React, { useState } from "react";
import {withFormik, Form, Field} from 'formik';
import {Link} from 'react-router-dom';
// export default function SearchForm() {
 
//   return (
//     <section className="search-form">
//      // Add a search form here
//     </section>
//   );
// }


const SearchForm = ({ errors, touched, values }) => {
  const [character, setCharacter] = useState({ species: "" });

  const handleChange = event => {
    setCharacter({ ...character, [event.target.name]: event.target.value });
  };

  const handleSubmit = event => {
    event.preventDefault();
  };

  return (
    <div className="search-form">
      <Link className= 'myLink' to='/'>Home</Link>
      <Link className= 'myLink' to='/characters'>Character</Link>
      
      <form onSubmit={event => handleSubmit(event)}>
        <label>
          Enter Character Name:  
          <input 
            type="text"
            name="persona"
            onChange={event => handleChange(event)}
          />
        </label>
        <button>Submit!</button>
      </form>
    </div>
  );
};

export default SearchForm;
