import moment from 'moment'
import { FaLocationArrow, FaBriefcase, FaCalendarAlt } from 'react-icons/fa'
import { Link } from 'react-router-dom'
import { useAppContext } from '../context/appContext'
import Wrapper from '../assets/wrappers/Job'

const Task = ({
  _id,
  title,
  isChecked,
}) => {
  const { setEditTask, checkTask, deleteTask } = useAppContext()

  let date = moment(createdAt)
  return (
    <form>
      <header>
        <div className='info'>
          <h5>{title}</h5>
        </div>
      </header>
      <div className='content'>
        <footer>
          <div className='actions'>
            <button
              className='btn edit-btn'
              onClick={() => setEditJob(_id)}
            >
              Edit
            </button>
            <button
              type='button'
              className='btn delete-btn'
              onClick={() => deleteJob(_id)}
            >
              Delete
            </button>
          </div>
        </footer>
      </div>
    </form>
  )
}

export default Job
