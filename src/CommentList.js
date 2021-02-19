import React from 'react'
import Comment from './Comment'

export default function CommentList({ comments }) {
  const commentElements = comments.map
  (comment => {
    return <Comment key={comment.id} {...comment}/>
  })
  return (
    <div>
      {commentElements}
    </div>
  )
}
