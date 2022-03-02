import React from 'react'
import { Toaster } from 'react-hot-toast' 
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
    <>
      <div className="container">
        <PageTitle>TODO LIST</PageTitle>
        <div /*className={styles.app__wrapper}*/>
          <AppHeader/>
          <AppContent/>
        </div>
      </div>
      <Toaster
        position="bottom-right"
        toastOptions={{
          style: {
            fontSize: '1.4rem',
          },
        }}/>
    </>
  )
}

export default Note