import React from 'react'

export default function Report(props) {
  const { 
    name, 
    author, 
    publishedYear, 
    publisher, 
    user, 
    createdAt
  } = props 
  
  return (
    <div>
      <div>
        <h3>{ name }</h3>
        <div>
          <button>Edit</button>
          <button>Delete</button>
        </div>
      </div>
      <div>
        <span>{ author }</span>
        <span>{ publishedYear }</span>
        <span>{ publisher }</span>
      </div>
      <div>
        <span>{ user }</span>
        <span>{ createdAt }</span>
      </div>
    </div>
  )
}



