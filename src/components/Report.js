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
    <div className="report">
      <div className="report__header">
        <h3 className="report__title">{ title }</h3>
        <div>
          <button 
            className="btn btn--primary mr-1"
            onClick={() => handleReportSelect(id)}
          >
            Edit
          </button>
        </div>
      </div>
      <div className="report__row">
        <span className="report__value">{ authors }</span>
      </div>
      <div className="container ">
        <div className="row report__row--sub">
          <div className="col report__value--sub">Published { publishedYear } by { publisher }</div>
          <div className="col report__value--sub report__value--end">Added { createdAt } by { user }</div>
        </div>
      </div>
    </div>
  )
}



