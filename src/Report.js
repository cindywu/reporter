import React from 'react'
import CommentList from './CommentList'

export default function Report(props) {
  const { 
    name, 
    author, 
    publishedYear, 
    publisher, 
    user, 
    createdAt,
    comments,
  } = props 

  return (
    <div>
      <div>
        <h3>{ name }</h3>
        {/* <div>
          <button>Edit</button>
          <button>Delete</button>
        </div> */}
      </div>
      <div>
        <span>{ author }</span>
        <span> · </span>
        <span>{ publishedYear }</span>
        <span> · </span>
        <span>{ publisher }</span>
      </div>
      <div>
        <span>{ user }</span>
        <span> · </span>
        <span>{ createdAt }</span>
      </div>
      <div>
        <br/>
        <CommentList comments={comments} />
      </div>
    </div>
  )
}



