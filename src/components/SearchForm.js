import React, {useState} from "react";
// import {withFormik, Form, Field} from 'formik';
import {Link} from 'react-router-dom';



export default function SearchForm({ onfind }) {
  const [find, setFind] = useState({ name: '' });
  const handleInputChange = event => {
    setFind({ ...find, name: event.target.value });
  };
  return (
    <div>
      <header>
        <Link to='/'>Home</Link>
        <Link className= 'myLink' to='/characters'>Characters</Link>
      </header>

      <section className='find-form'>
        <form onSubmit={() => onfind(find.name)}>
          <input
            onChange={handleInputChange}
            placeholder='Search characters name'
            value={find.name}
            name='name'
          />
          <button type='submit'>Search</button>
        </form>
      </section>
    </div>
  );
}