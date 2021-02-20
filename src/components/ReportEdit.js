import React, { useContext } from 'react'
import ReportCommentEdit from './ReportCommentEdit'
import { ReportContext } from './App'

export default function ReportEdit({ report }) {
  const { handleReportChange } = useContext(ReportContext)

  function handleChange(changes) {
    handleReportChange(report.id, { ...report, ...changes })
  }

  function handleCommentChange(id, comment) {
    const newComments = [...report.comments]
    const index = newComments.findIndex(c => c.id === id)
    newComments[index] = comment
    handleChange({comments: newComments})
  }

  return (
    <div className="report-edit">
      <div className="report-edit__remove-button-container">
        <button className="btn report-edit__remove-button">&times;</button>
      </div>
      <div className="report-edit__details-grid">
        <label 
          htmlFor="title" 
          className="report-edit__label">
          Title
        </label>
        <input 
          type="text" 
          name="title" 
          id="title" 
          value={report.title}
          onInput={e => handleChange({ title: e.target.value })}
          className="report-edit__input" />
        <label 
          htmlFor="authors"
          className="report-edit__label">
          Author(s)
        </label>
        <input 
          type="text" 
          name="authors" 
          id="authors" 
          value={report.authors}
          onInput={e => handleChange({ authors: e.target.value })}
          className="report-edit__input" />
        <label 
          htmlFor="publishedYear"
          className="report-edit__label">
          Published Year
        </label>
        <input 
          type="number" 
          min="1" 
          name="publishedYear" 
          id="publishedYear"
          value={report.publishedYear}
          onInput={e => handleChange({ publishedYear: parseInt(e.target.value) || '' })}
          className="report-edit__input" />
        <label 
          htmlFor=""
          className="report-edit__label">
          Publisher
        </label>
        <input 
          type="text" 
          name="publisher" 
          id="publisher"
          value={report.publisher}
          onInput={e => handleChange({ publisher: e.target.value })}
          className="report-edit__input" />
        <label 
          htmlFor="User"
          className="report-edit__label">
          User
        </label>
        <input 
          type="text" 
          name="user" 
          id="user"
          value={report.user}
          onInput={e => handleChange({ user: e.target.value })}
          className="report-edit__input" />
        <label 
          htmlFor="createdAt"
          className="report-edit__label">
          Created At
        </label>
        <input 
          type="text" 
          name="createdAt" 
          id="createdAt" 
          value={report.createdAt}
          onInput={e => handleChange({ createdAt: e.target.value })}
          className="report-edit__input" />
      </div>
      <br />
      <label className="report-edit__label">Comments</label>
      <div className="report-edit__comment-grid">
        <div>Highlighted Text</div>
        <div>Comment</div>
        <div></div>
        {report.comments.map (comment => (
          <ReportCommentEdit 
            key={comment.id} 
            handleCommentChange={handleCommentChange}
            comment={comment}
          />
        ))}
      </div>
      <div className="report-edit__add-comment-btn-container">
        <button className="btn btn--primary">Add Comment</button>
      </div>  
    </div>
  )
}