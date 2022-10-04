import React from 'react'
import { useParams } from 'react-router'
import { useGetKeywordData } from '../../../utils/Hooks'

function KeywordPage() {
    let {id} = useParams()
    id = id.replace("-" , " ")
    const parms = id.split(" ")
    const  keyword = parms[1].replaceAll("-", " ")
    console.log(keyword)
    const data = useGetKeywordData(keyword)
  return (
    <div>KeywordPage</div>
  )
}

export default KeywordPage