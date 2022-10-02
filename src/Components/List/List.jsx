import React, { useState } from 'react'
import { useParams } from 'react-router-dom'
import { useGetResult } from '../../utils/Hooks'
import ListItem from './ListItem'

function List() {
    const {name} = useParams()
    const [type , changeType] = useState('movie')
    const result = useGetResult(type, name)
    console.log(result)
    const list_items = result.map(item => {
      return <ListItem key={item.id} id={item.id} type = {type} overview={item.overview} release = {type === "movie" ? item.release_date : item.first_air_date} title = {type === "movie" ? item.title : item.name} poster_path = {item.poster_path}/>
    })
  return (
    <div className='search-container'>
      <div className='filter-container'>
        <p className='filter-h'>Search Results</p>
        <div className='filter-type'>
          <p onClick={() => changeType('movie')}>Movies</p>
          <p onClick={() => changeType('tv')}>TV Shows</p>
          <p onClick={() => changeType('person')}>People</p>
        </div>
       
      </div>
      <div className="result">
        {list_items}
      </div>
    </div>
  )
}

export default List