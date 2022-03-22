import moment from 'moment'
import { FaLocationArrow, FaBriefcase, FaCalendarAlt, FaShareAlt, FaTrashAlt } from 'react-icons/fa'
import { BsShareFill } from 'react-icons/bs'
import { Link } from 'react-router-dom'
import { useAppContext } from '../context/appContext'
import Wrapper from '../assets/wrappers/Job'
import ListInfo from './ListInfo'
import AddTask from './AddTask'
import { TiEdit } from 'react-icons/ti'
import Addtodo from './Addtodo'
import Tasks from './Tasks'
import  Provider  from '../context'

import AppHeader from './AppHeader'
import AppContent from './AppContent'
import Button from './Button'

import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import ShareModal from './ShareModal';
import { updateFilterStatus } from '../slices/todoSlice';




const List = ({
  _id,
  noteTitle,
  createdAt,
}) => {
  const { setEditJob, shareJob, deleteJob } = useAppContext()

  const [modalOpen, setModalOpen] = useState(false)
  const dispatch = useDispatch()

  let date = moment(createdAt)
  date = date.format('Do MMM, YYYY')
  return (
    <Wrapper>
      <header>
        <div className='info'>
          <h5>{noteTitle} </h5>
          <ListInfo icon={<FaCalendarAlt />} text={date} />
        </div>
      </header>
      <main>
        <Provider>
          <div>
            <AppHeader/>
            <AppContent/>
          </div>
        </Provider>
      </main>
      <footer className='content'>
        <div className='actions'>
          {/* Start of Share button */}
          <Button variant="primary" onClick={() => setModalOpen(true)}>
            Share
          </Button>
          <ShareModal type="add" modalOpen={modalOpen} setModalOpen={setModalOpen}/>
          {/* End of Share button */}
          {/* Start of Delete button */}
          <Button
            type='button'
            variant="delete"
            className='btn delete-btn'
            onClick={() => deleteJob(_id)}
          >
            Delete
          </Button>
          {/* End of Delete button */}
        </div>
      </footer>
    </Wrapper>
  )
}

export default List