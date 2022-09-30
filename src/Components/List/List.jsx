import React from 'react'
import { useParams } from 'react-router-dom'

function List() {
    const {name} = useParams()
   
  return (
    <div>List</div>
  )
}

export default List