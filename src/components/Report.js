import React from 'react'
import CommentList from './CommentList'

export default function Report(props) {
  const { 
    id,
    name, 
    author, 
    publishedYear, 
    publisher, 
    user, 
    createdAt,
    comments,
    handleReportDelete
  } = props 

  return (
    <div className="report">
      <div className="report__header">
        <h3 clasName="report__title">{ name }</h3>
        <div>
          <button 
            className="btn btn--primary mr-1"
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
        <span className="report__value">{ author }</span>
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



