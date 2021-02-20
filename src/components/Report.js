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
          <button 
            className="btn btn--danger"
            onClick={() => handleReportDelete(id)}
          >
            Delete
          </button>
        </div>
      </div>
      <div className="report__row">
        <span className="report__value">{ authors }</span>
        <span> · </span>
        <span className="report__value">{ publishedYear }</span>
        <span> · </span>
        <span className="report__value">{ publisher }</span>
      </div>
      <div className="report__row">
        <span className="report__value">{ user }</span>
        <span> · </span>
        <span className="report__value">{ createdAt }</span>
      </div>
      <div className="report__row">
        <div className="report__value report__comments">
          <CommentList comments={comments} />
        </div>
      </div>
    </div>
  )
}



