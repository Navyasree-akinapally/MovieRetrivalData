// eslint-disable-next-line no-unused-vars
import React from 'react'
import axios from 'axios';
import { useState } from 'react'

function AddData() {
  const [movie, setmoviename] = useState();
  const [actor, setactor] = useState();
  const [actress, setactress] = useState();
  const [rating, setrating] = useState();

  const senddata = async (e) => {
    e.preventDefault();
    
    try {
      const response = await axios.post('http://localhost:3000/postmoviedata',
        {
          movie,
          actor,
          actress,
          rating
        }
      );
      console.log(response.data);
    } catch (error) {
      console.error(error);
    }
  };
  
    return (
    <>
    <h1>AddMovieData</h1>
    <form onSubmit={senddata}>
    <input type="text" name='moviename'
    onChange={(e) => setmoviename(e.target.value)} />
      <input type="text" name="actor" 
      onChange={(e) => setactor(e.target.value)} />
      <input type='text' name="actress" 
      onChange={(e) => setactress(e.target.value)} />
      <input type='number' name="rating" 
      onChange={(e) => setrating(e.target.value)} />
      <button type="submit">Submit</button>
    </form>
    </>
    
  )
}

export default AddData