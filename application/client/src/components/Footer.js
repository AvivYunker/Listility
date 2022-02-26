import React from 'react'
import styles from '../assets/css/index.css'

const Footer = () => {
    
  const currentYear = new Date().getFullYear()
  
  return (
    <footer>
        <p>Copyrights © {currentYear}</p>
    </footer>
  )
}

export default Footer