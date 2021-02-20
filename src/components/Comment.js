import React from 'react'

export default function Comment( { highlightedText, commentText}) {
  return (
    <>
      <div>{highlightedText}</div>
      <div>{commentText}</div>
      <br/>
    </>
  )
}
