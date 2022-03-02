import React from 'react'
import styles from '../assets/css/index.css'
import AppHeader from './AppHeader'
import PageTitle from './PageTitle'
import AppContent from './AppContent'

// THIS PAGE IS EQUIVALENT TO "App.js"

const Note = (props) => {

  function handleClick() {
      props.onDelete(props.id)
  }

  return (
  <div className="note">
      {/* <h1>{props.title}</h1>
      <p>{props.content}</p>
      <button onClick={handleClick}>DELETE</button> */}
      <AppHeader/>
      <AppContent></AppContent>
  </div>
  )
}

export default Note