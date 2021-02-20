import React from 'react'

export default function ReportCommentEdit(props) {
  const {
    comment,
    handleCommentChange
  } = props

  function handleChange(changes) {
    handleCommentChange(comment.id, { ...comment, ...changes})
  }
  return (
    <>
      <textarea 
        className="report-edit__input"
        onInput={(e) => handleChange({ highlightedText: e.target.value })}
        value={comment.highlightedText}
      />
      <textarea 
        className="report-edit__input"
        onInput={(e) => handleChange({ commentText: e.target.value })}
        value={comment.commentText} 
        
      />
      <button className="btn btn--danger">&times;</button>
    </>
  )
}
