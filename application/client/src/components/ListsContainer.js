import { useAppContext } from '../context/appContext'
import { useEffect } from 'react'
import Loading from './Loading'
import Job from './List'
import Wrapper from '../assets/wrappers/JobsContainer'
import PageBtnContainer from './PageBtnContainer'

const ListsContainer = () => {
  const {
    getJobs,
    jobs,
    isLoading,
    page,
    totalJobs,
    search,
    searchStatus,
    searchType,
    sort,
    numOfPages,
  } = useAppContext()
  useEffect(() => {
    getJobs()
    // eslint-disable-next-line
  }, [page, search, searchStatus, searchType, sort])
  if (isLoading) {
    return <Loading center />
  }

  if (jobs.length === 0) {
    return (
      <Wrapper>
        <h2 id="NoListsHeader">No lists to display...</h2>
      </Wrapper>
    )
  }

  return (
    <Wrapper>
      <h5>
        {jobs.length} list{jobs.length > 1 && 's'} found
      </h5>
      <div className='jobs'>
        {jobs.map((job) => {
          // console.log(...job.taskList[0])
          // let cnt = 0
          // job.taskList.map((task) => {
          //   console.log(`${task.taskTitle} => ${cnt}`)
          //   cnt += 1
          // })
          return <Job key={job._id} {...job}/>
        })}
      </div>
      {numOfPages > 1 && <PageBtnContainer />}
    </Wrapper>
  )
}

export default ListsContainer
