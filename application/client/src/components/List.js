import moment from 'moment'
import { FaLocationArrow, FaBriefcase, FaCalendarAlt, FaShareAlt, FaTrashAlt } from 'react-icons/fa'
import { BsShareFill } from 'react-icons/bs'
import { Link } from 'react-router-dom'
import { useAppContext } from '../context/appContext'
import Wrapper from '../assets/wrappers/Job'
import ListInfo from './ListInfo'
import TodoList from './TodoList'
import { TiEdit } from 'react-icons/ti'


const List = ({
  _id,
  noteTitle,
  createdAt,
}) => {
  const { setEditJob, deleteJob } = useAppContext()

  let date = moment(createdAt)
  date = date.format('Do MMM, YYYY')
  return (
    <Wrapper>
      <header>
        <div className='info'>
          <h5>{noteTitle}</h5>
          <TiEdit
                    // onClick={() => setEdit({id: todo.id, value: todo.text})}
                    className='edit-icon'
          />
          <ListInfo icon={<FaCalendarAlt />} text={date} />
        </div>
      </header>
      <main>
        <div className='info'>
          <TodoList/>
        </div>
      </main>
      <div className='content'>
        <footer>
          <div className='actions'>
            {/* Start of Share button */}
            <button
              type='button'
              className='btn add-btn' // this should be yellow
              // onClick={() => deleteJob(_id)}
            >
              Share
            </button>
            {/* End of Share button */}
            {/* Start of Delete button */}
            <button
              type='button'
              className='btn delete-btn'
              onClick={() => deleteJob(_id)}
            >
              Delete
            </button>
            {/* End of Delete button */}
          </div>
        </footer>
      </div>
    </Wrapper>
  )
}

export default List