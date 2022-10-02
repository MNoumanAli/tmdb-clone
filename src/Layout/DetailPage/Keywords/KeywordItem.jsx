import React from 'react'
import { useNavigate } from 'react-router'

function KeywordItem(props) {
    const navigate = useNavigate()
    let updateName = (props.name).replaceAll(' ', "-")
    function getDetail()
    {   
        navigate(`/keyword/${props.id + "-" + updateName}/${props.type}`)
    }
  return (
    <div className='keyword-name' onClick={getDetail}>{props.name}</div>
  )
}

export default KeywordItem