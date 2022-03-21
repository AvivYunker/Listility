import React from 'react'
import mern from '../../assets/images/mern.png'
import { Link } from 'react-router-dom'

import { useState } from 'react'
import { FormRow, Alert } from '../../components'
import { useAppContext } from '../../context/appContext'
import Wrapper from '../../assets/wrappers/DashboardFormPage'

const About = () => {
  return (
    <div>
      <div>
        <h1>about Listility</h1>
      </div>
      <div>
        <p>
          This application was created by Aviv Yunker, Boris Sholkov and Netanel Alder,
          with the ambition of making a list-creating and note-taking application
          to be more accessible to the general public.
        </p>
      </div>
      <div>
        <p>
          This app was created using the MERN stack
        </p>
      </div>
      <div>
        <img src={mern} height="238.5px" width="500px" alt='not found' />
      </div>
      {/* <div>
        <button className='btn btn-block'>
          <Link to='/all-lists'>back to All Lists</Link>
        </button>
      </div> */}
    </div>
  )
}

export default About