import { useState } from 'react'
import { FormRow, Alert } from '../../components'
import { useAppContext } from '../../context/appContext'
import Wrapper from '../../assets/wrappers/DashboardFormPage'
const Profile = () => {
  const { user, showAlert, displayAlert, updateUser, isLoading } =
    useAppContext()

  const [name, setName] = useState(user?.name)
  const [email, setEmail] = useState(user?.email)

  const handleSubmit = (e) => {
    e.preventDefault()
    if (!name || !email) {
      displayAlert()
      return
    }
    updateUser({ name, email })
  }

  return (
    <Wrapper>
      <form className='form' onSubmit={handleSubmit}>
        <h3>profile</h3>
        {showAlert && <Alert />}
        <div className='form-center'>
          <FormRow
            id="ChangeNameUserDetails"
            type='text'
            name='Enter new name:'
            value={name}
            handleChange={(e) => setName(e.target.value)}
          />
          <FormRow
            id="ChangeEmailUserDetails"
            type='email'
            name='Enter new email:'
            value={email}
            handleChange={(e) => setEmail(e.target.value)}
          />
          <button id="SubmitNewUserDetails" className='btn btn-block' type='submit' disabled={isLoading}>
            {isLoading ? 'Please Wait...' : 'save changes'}
          </button>
        </div>
      </form>
    </Wrapper>
  )
}

export default Profile