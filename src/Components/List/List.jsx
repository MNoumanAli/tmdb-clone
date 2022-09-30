import React, { useState } from 'react'
import { useParams } from 'react-router-dom'
import { useGetResult } from '../../utils/Hooks'

function List() {
    const {name} = useParams()
    console.log(name)
    const [type , changeType] = useState('movie')
    const result = useGetResult(type, name)
    console.log(result)
  return (
    <div className='search-container'>
      <div className='filter-container'>
        <p>Search Results</p>
        <p onClick={() => changeType('movie')}>Movies</p>
        <p onClick={() => changeType('tv')}>TV Shows</p>
        <p onClick={() => changeType('person')}>People</p>
      </div>
      <div className="result">

      </div>
    </div>
  )
}

export default List