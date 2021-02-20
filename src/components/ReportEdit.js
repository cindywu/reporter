import React from 'react'
import ReportCommentEdit from './ReportCommentEdit'

export default function ReportEdit() {
  return (
    <div className="report-edit">
      <div>
        <button>&times;</button>
      </div>
      <div>
        <label htmlFor="">Title</label>
        <input type="text" name="title" id="title"></input>
        <label htmlFor="">Author(s)</label>
        <input type="number" min="1" name="authors" id="authors"></input>
        <label htmlFor="">Published Year</label>
        <input type="text" name="publishedYear" id="publishedYear"></input>
        <label htmlFor="">Publisher</label>
        <input type="text" name="publisher" id="publisher"></input>
        <label htmlFor="">User</label>
        <input type="text" name="user" id="user"></input>
        <label htmlFor="">Created At</label>
        <input type="text" name="createdAt" id="createdAt"></input>
      </div>
      <br />
      <label>Comments</label>
      <div>
        <div>Highlighted Text</div>
        <div>Comment</div>
        <div></div>
        <ReportCommentEdit />
        <ReportCommentEdit />
      </div>
      <div>
        <button>Add Comment</button>
      </div>  
    </div>
  )
}