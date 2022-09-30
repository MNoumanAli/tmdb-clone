import React, { useState } from 'react'
import { useNavigate } from 'react-router'

function Hero() {
  const [input, updateValue] = useState('')
  const navigate = useNavigate()
  function updateInput(e)
  {
    updateValue(e.target.value)
  }
  function getResult()
  {
    navigate(`/search/${input}`)
  }

  return (
    <div className='hero-container'>
        <div className='hero-content'>
            <p className='welcome'>Welcome.</p>
            <p>Millions of movies, TV shows and people to discover. Explore now.</p>
        </div>
        <div className='input'>
            <input onChange={updateInput} value = {input} className='hero-input' type="text"  placeholder='Search for movie, tv show, person......'/>
            <button className='search-btn' onClick={getResult}>Search</button>
        </div>
    </div>
  )
}

export default Hero