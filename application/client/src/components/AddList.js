import { FormRow, FormRowSelect, Alert } from '../components'
import { useAppContext } from '../context/appContext'
import Wrapper from '../assets/wrappers/DashboardFormPage'
import ListsContainer from './ListsContainer'

const AddList = () => {
  const {
    isLoading,
    isEditing,
    showAlert,
    displayAlert,
    listTitle,
    handleChange,
    clearValues,
    createJob,
    editJob,
  } = useAppContext()

  const handleSubmit = (e) => {
    e.preventDefault()

    if (!listTitle) {
      displayAlert()
      return
    }
    if (isEditing) {
      editJob()
      return
    }
    createJob()
    window.setTimeout(()=>{
    window.location.reload(false);
      this.useState({});
    }, 1500);
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
            id="NewListTitle"
            type='text'
            labelText='Enter List Topic:'
            name='listTitle'
            handleChange={handleJobInput}
          />
          {/* btn container */}
          <div className='btn-container'>
            <button
              id="SubmitListTitle"
              type='submit'
              className='btn btn-block submit-btn'
              onClick={handleSubmit}
              disabled={isLoading}
            >
              submit
            </button>
            <button
              id="ClearListTitle"
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
