import React, { useContext } from 'react'
import CommentList from './CommentList'
import { ReportContext } from './App'

export default function Report(props) {
  const { handleReportDelete, handleReportSelect } = useContext(ReportContext)
  const { 
    id,
    title, 
    authors, 
    publishedYear, 
    publisher, 
    user, 
    createdAt,
    comments,
  } = props 

  return (
    <div 
      className="report"
      onClick={() => handleReportSelect(id)}>
      <div className="report__header">
        <h3 className="report__title">{ title }</h3>
      </div>
      <div className="report__row">
        <span className="report__value">{ authors }</span>
        <span> · </span>
        <span className="report__value">{ publishedYear }</span>
        <span> · </span>
        <span className="report__value">{ publisher }</span>
      </div>
      <div className="container ">
        <div className="row report__row--sub">
          <span className="report__value--sub">Added by { user } on { createdAt }</span>
        </div>
      </div>
    </div>
  )
}



