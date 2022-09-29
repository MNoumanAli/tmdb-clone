import React from 'react'
import { useParams } from 'react-router'

function DetailPage() {
    const parms = useParams()
    console.log(parms)
  return (
    <div>DetailPage</div>
  )
}

export default DetailPage