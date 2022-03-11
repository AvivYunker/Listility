import { FormRow, FormRowSelect, Alert } from '../components'
import { useAppContext } from '../context/appContext'
import Wrapper from '../assets/wrappers/DashboardFormPage'

const AddList = () => {
  const {
    isLoading,
    isEditing,
    showAlert,
    displayAlert,
    noteTitle,
    handleChange,
    clearValues,
    createJob,
    editJob,
  } = useAppContext()

  const handleSubmit = (e) => {
    e.preventDefault()

    if (!noteTitle) {
      displayAlert()
      return
    }
    if (isEditing) {
      editJob()
      return
    }
    createJob()
  }
  const handleJobInput = (e) => {
    const name = e.target.name
    const value = e.target.value
    handleChange({ name, value })
  }

  return (
    <Wrapper>
      <form className='form'>
        <h3>{isEditing ? 'edit list' : 'add list'}</h3>
        {showAlert && <Alert />}
        <div className='form-center'>
          {/* location */}
          <FormRow
            type='text'
            labelText='Enter List Topic:'
            name='noteTitle'
            value={noteTitle}
            handleChange={handleJobInput}
          />
          {/* btn container */}
          <div className='btn-container'>
            <button
              type='submit'
              className='btn btn-block submit-btn'
              onClick={handleSubmit}
              disabled={isLoading}
            >
              submit
            </button>
            <button
              className='btn btn-block clear-btn'
              onClick={(e) => {
                e.preventDefault()
                clearValues()
              }}
            >
              clear
            </button>
          </div>
        </div>
      </form>
    </Wrapper>
  )
}

export default AddList
