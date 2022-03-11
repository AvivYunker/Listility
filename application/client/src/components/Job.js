import moment from 'moment'
import { FaLocationArrow, FaBriefcase, FaCalendarAlt } from 'react-icons/fa'
import { Link } from 'react-router-dom'
import { useAppContext } from '../context/appContext'
import Wrapper from '../assets/wrappers/Job'
import JobInfo from './JobInfo'

const Job = ({
  _id,
  noteTitle,
  createdAt,
}) => {
  const { setEditJob, deleteJob } = useAppContext()

  let date = moment(createdAt)
  date = date.format('MMM Do, YYYY')
  return (
    <Wrapper>
      <header>
        <div className='info'>
          <h5>{noteTitle}</h5>
          <JobInfo icon={<FaCalendarAlt />} text={date} />
        </div>
      </header>
      <main>
        <div className='info'>
          This is where the tasks will go...
        </div>
      </main>
      <div className='content'>
        <footer>
          <div className='actions'>
            {/* Start of Add-Task button */}
            <button
              type='button'
              className='btn edit-btn' // this should be green
              // onClick={() => deleteJob(_id)}
            >
              Add Task
            </button>
            {/* End of Add-Task button */}
            {/* Start of Share button */}
            <button
              type='button'
              className='btn add-btn' // this should be yellow
              // onClick={() => deleteJob(_id)}
            >
              share
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

export default Job
