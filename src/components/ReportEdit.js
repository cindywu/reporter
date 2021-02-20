import React from 'react'
import ReportCommentEdit from './ReportCommentEdit'

export default function ReportEdit() {
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
          className="report-edit__input" />
      </div>
      <br />
      <label className="report-edit__label">Comments</label>
      <div className="report-edit__comment-grid">
        <div>Highlighted Text</div>
        <div>Comment</div>
        <div></div>
        <ReportCommentEdit />
        <ReportCommentEdit />
      </div>
      <div className="report-edit__add-comment-btn-container">
        <button className="btn btn--primary">Add Comment</button>
      </div>  
    </div>
  )
}