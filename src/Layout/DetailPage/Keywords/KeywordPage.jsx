import React from 'react'
import { useParams } from 'react-router'
import { useGetKeywordData } from '../../../utils/Hooks'

function KeywordPage() {
    const {id} = useParams()
    //const data = useGetKeywordData(id)
  return (
    <div>KeywordPage</div>
  )
}

export default KeywordPage