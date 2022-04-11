import React, { useReducer, useContext } from 'react'

import reducer from './reducer'
import axios from 'axios'
import {
  DISPLAY_ALERT,
  CLEAR_ALERT,
  SETUP_USER_BEGIN,
  SETUP_USER_SUCCESS,
  SETUP_USER_ERROR,
  TOGGLE_SIDEBAR,
  LOGOUT_USER,
  UPDATE_USER_BEGIN,
  UPDATE_USER_SUCCESS,
  UPDATE_USER_ERROR,
  HANDLE_CHANGE,
  CLEAR_VALUES,
  CREATE_LIST_BEGIN,
  CREATE_LIST_SUCCESS,
  CREATE_LIST_ERROR,
  GET_LISTS_BEGIN,
  GET_LISTS_SUCCESS,
  SET_EDIT_LIST,
  DELETE_LIST_BEGIN,
  EDIT_LIST_BEGIN,
  EDIT_LIST_SUCCESS,
  EDIT_LIST_ERROR,
  SHOW_STATS_BEGIN,
  SHOW_STATS_SUCCESS,
  CLEAR_FILTERS,
  CHANGE_PAGE,
  SHARE_LIST_BEGIN,
  SHARE_LIST_SUCCESS,
  SHARE_LIST_ERROR,
  CREATE_TASK_BEGIN,
  CREATE_TASK_SUCCESS,
  CREATE_TASK_ERROR,
  GET_TASKS_BEGIN,
  GET_TASKS_SUCCESS,
  SET_CHECK_TASK,

  UPDATE_TASK_BEGIN,
  UPDATE_TASK_SUCCESS,
  UPDATE_TASK_ERROR,

  DELETE_TASK_BEGIN,
  DELETE_TASK_SUCCESS,
  DELETE_TASK_ERROR,

  LIST_TITLE_BEGIN,
  LIST_TITLE_SUCCESS,
  LIST_TITLE_ERROR,

  DUPLICATE_LIST_BEGIN,
  DUPLICATE_LIST_SUCCESS,
  DUPLICATE_LIST_ERROR,
  
  ADD_SHARE_BEGIN,
  ADD_SHARE_SUCCESS,
  ADD_SHARE_ERROR,

  REMOVE_SHARE_BEGIN, // the problem is that it doesn't appear in reducer.js!!!
  REMOVE_SHARE_SUCCESS,
  REMOVE_SHARE_ERROR,

} from './actions'

const token = localStorage.getItem('token')
const user = localStorage.getItem('user')
const userLocation = localStorage.getItem('location')

const initialState = {
  isLoading: false,
  showAlert: false,
  alertText: '',
  alertType: '',
  user: user ? JSON.parse(user) : null,
  token: token,
  userLocation: userLocation || '',
  showSidebar: false,
  isEditing: false,
  editJobId: '',
  position: '',
  company: '',
  listTitle: userLocation || '',
  jobTypeOptions: ['full-time', 'part-time', 'remote', 'internship'],
  jobType: 'full-time',
  statusOptions: ['interview', 'declined', 'pending'],
  status: 'pending',
  jobs: [],
  totalJobs: 0,
  numOfPages: 1,
  page: 1,
  stats: {},
  monthlyApplications: [],
  search: '',
  searchStatus: 'all',
  searchType: 'all',
  sort: 'latest',
  sortOptions: ['latest', 'oldest', 'a-z', 'z-a'],
}

const AppContext = React.createContext()

const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState)
  let baseURL;

  // axios
  const authFetch = axios.create({
    baseURL: 'http://listility-backend-testing.azurewebsites.net' + '/api/v1', // NEW
    // baseURL: 'http://listility-backend.azurewebsites.net' + '/api/v1', // OLD
  })
  // request

  authFetch.interceptors.request.use(
    (config) => {
      config.headers.common['Authorization'] = `Bearer ${state.token}`
      return config
    },
    (error) => {
      return Promise.reject(error)
    }
  )
  // response

  authFetch.interceptors.response.use(
    (response) => {
      return response
    },
    (error) => {
      // console.log(error.response)
      if (error.response.status === 401) {
        // logoutUser()
      }
      return Promise.reject(error)
    }
  )

  const displayAlert = () => {
    dispatch({ type: DISPLAY_ALERT })
    clearAlert()
  }

  const clearAlert = () => {
    setTimeout(() => {
      dispatch({ type: CLEAR_ALERT })
    }, 3000)
  }

  const addUserToLocalStorage = ({ user, token, location }) => {
    localStorage.setItem('user', JSON.stringify(user))
    localStorage.setItem('token', token)
    localStorage.setItem('location', location)
  }

  const removeUserFromLocalStorage = () => {
    localStorage.removeItem('token')
    localStorage.removeItem('user')
    localStorage.removeItem('location')
  }

  const setupUser = async ({ currentUser, endPoint, alertText }) => {
    dispatch({ type: SETUP_USER_BEGIN })
    try {
      // const { data } = await axios.post(`/api/v1/auth/${endPoint}`, currentUser)
      const { data } = await axios.post(`http://listility-backend-testing.azurewebsites.net/api/v1/${endPoint}`, currentUser)
      const { user, token, location } = data
      dispatch({
        type: SETUP_USER_SUCCESS,
        payload: { user, token, location, alertText },
      })
      addUserToLocalStorage({ user, token, location })
    } catch (error) {
      dispatch({
        type: SETUP_USER_ERROR,
        payload: { msg: error.response.data.msg },
      })
    }
    clearAlert()
  }
  const toggleSidebar = () => {
    dispatch({ type: TOGGLE_SIDEBAR })
  }

  const logoutUser = () => {
    dispatch({ type: LOGOUT_USER })
    removeUserFromLocalStorage()
  }
  const updateUser = async (currentUser) => {
    dispatch({ type: UPDATE_USER_BEGIN })
    try {
      const { data } = await authFetch.patch('/auth/updateUser', currentUser)

      const { user, location, token } = data

      dispatch({
        type: UPDATE_USER_SUCCESS,
        payload: { user, location, token },
      })
      addUserToLocalStorage({ user, location, token })
    } catch (error) {
      if (error.response.status !== 401) {
        dispatch({
          type: UPDATE_USER_ERROR,
          payload: { msg: error.response.data.msg },
        })
      }
    }
    clearAlert()
  }

  const handleChange = ({ name, value }) => {
    dispatch({ type: HANDLE_CHANGE, payload: { name, value } })
  }
  const clearValues = () => {
    dispatch({ type: CLEAR_VALUES })
  }
  const createJob = async () => {
    dispatch({ type: CREATE_LIST_BEGIN })
    try {
      const { listTitle } = state
      await authFetch.post('/lists', {
        listTitle,
      })
      dispatch({ type: CREATE_LIST_SUCCESS })
      dispatch({ type: CLEAR_VALUES })
    } catch (error) {
      if (error.response.status === 401) return
      dispatch({
        type: CREATE_LIST_ERROR, // we were here
        payload: { msg: error.response.data.msg },
      })
    }
    clearAlert()
  }

  const getJobs = async () => {
    const { page, search, searchStatus, searchType, sort } = state

    let url = `/lists?page=${page}&status=${searchStatus}&jobType=${searchType}&sort=${sort}`
    if (search) {
      url = url + `&search=${search}`
    }
    dispatch({ type: GET_LISTS_BEGIN })
    try {
      const { data } = await authFetch(url)
      const { lists:jobs, totalJobs, numOfPages } = data
      dispatch({
        type: GET_LISTS_SUCCESS,
        payload: {
          jobs,
          totalJobs,
          numOfPages,
        },
      })
    } catch (error) {
      // logoutUser()
      dispatch({ type: GET_LISTS_SUCCESS, payload: error})
    }
    clearAlert()
  }

  const setEditJob = (id) => {
    dispatch({ type: SET_EDIT_LIST, payload: { id } })
  }
  const editJob = async () => {
    dispatch({ type: EDIT_LIST_BEGIN })
    try {
      const { listTitle } = state
      await authFetch.patch(`/lists?listID=${state.editJobId}`, {
        listTitle:listTitle,
      })
      dispatch({ type: EDIT_LIST_SUCCESS })
      dispatch({ type: CLEAR_VALUES })
    } catch (error) {
      if (error.response.status === 401) return
      dispatch({
        type: EDIT_LIST_ERROR,
        payload: { msg: error.response.data.msg },
      })
    }
    clearAlert()
  }

  const editListTitle = async (listId, listTitle) => { // WORK HERE
    // alert("In editListTitle, the listId is: " + listId)
    // alert("In editListTitle, the newTitle is: " + listTitle)
    dispatch({ type: LIST_TITLE_BEGIN })
    try {
      await authFetch.put(`/lists?listTitle=${listTitle}`, {
        listId,
        listTitle,
      })
      dispatch({
        type: LIST_TITLE_SUCCESS,
        payload: { listTitle }
      })
      getJobs()
    } catch(error) {
      if (error.response.status !== 401) {
        dispatch({
          type: LIST_TITLE_ERROR,
          payload: { msg: error.response.data.msg },
        })
      }
    }
  }

  const shareJob = async (jobId) => {
    dispatch({ type: SHARE_LIST_BEGIN })
    try {
      console.log("The jobId is: " + jobId)
    } catch (error) {
      // logoutUser()
    }
  }

  const deleteJob = async (jobId) => {
    dispatch({ type: DELETE_LIST_BEGIN })
    try {
      await authFetch.delete(`/lists?listid=${jobId}`)
      getJobs()
    } catch (error) {
      // logoutUser()
    }
  }

  const createTask = async (listId, taskTitle, isChecked) => {
    dispatch({ type: CREATE_TASK_BEGIN })
    // alert("in createTask");
    try {
      await authFetch.post(`/list/${listId}/task`, {
        taskTitle,
        isChecked,
      })
      dispatch({ type: CREATE_TASK_SUCCESS })
      getJobs()
      dispatch({ type: CLEAR_VALUES })
    } catch (error) {
      if (error.response.status === 401) return
      dispatch({
        type: CREATE_TASK_ERROR,
        payload: { msg: error.response.data.msg },
      })
    }
    clearAlert()
  }

  const updateTask = async (listId, taskId, taskTitle, isChecked) => {
    alert("in AppContext/UpdateTask, listId is: " + listId)
    alert("in AppContext/UpdateTask, taskId is: " + taskId)
    alert("in AppContext/UpdateTask, taskTitle is: " + taskTitle)
    alert("todo.isChecked inside AppContext is: " + isChecked)
    dispatch({ type: UPDATE_TASK_BEGIN })
    try {
      await authFetch.put(`/list/${listId}/task/?taskId=${taskId}`, {
        taskId,
        taskTitle,
        isChecked,
      })
      dispatch({
        type: UPDATE_TASK_SUCCESS,
        payload: { taskId, taskTitle, isChecked }
      })
      getJobs()
    } catch (error) {
      if (error.response.status !== 401) {
        dispatch({
          type: UPDATE_TASK_ERROR,
          payload: { msg: error.response.data.msg },
        })
      }
    }
  }

  const deleteTask = async (taskId, listId) => {
    // alert("The task ID is: " + taskId)
    // alert("The listId is: " + listId)
    dispatch({ type: DELETE_TASK_BEGIN })
    try {
      await authFetch.delete(`/list/${listId}/task/?taskId=${taskId}`)
      dispatch({ type: DELETE_TASK_SUCCESS })
      getJobs()
      dispatch({ type: CLEAR_VALUES })
    } catch (error) {
      if (error.response.status === 401) {
        // logoutUser()
        dispatch({ type: DELETE_TASK_ERROR })
      } else {
      }
      clearAlert()
    }
  }

  const duplicateList = async (listId) => {
    dispatch({ type: DUPLICATE_LIST_BEGIN })
    try {
      // const { listTitle } = state
      await authFetch.post(`/lists/dup`, {
        listId
      })
      dispatch({ type: DUPLICATE_LIST_SUCCESS })
      getJobs()
      dispatch({ type: CLEAR_VALUES })
    } catch (error) {
      if (error.response.status === 401) return
      dispatch({
        type: DUPLICATE_LIST_ERROR,
        payload: { msg: error.response.data.msg },
      })
    }
    clearAlert()
  }

  const addShare = async (listId, userEmail, isEdit) => {

    // alert("Started the 'addShare'!")
    // alert("listId inside addShare is: " + listId)
    // alert("userEmail inside addShare is: " + userEmail)
    // alert("isEdit inside addShare is: " + isEdit)
    // alert("")
    dispatch({ type: ADD_SHARE_BEGIN })
    try {
      await authFetch.post(`/list/${listId}/share`, {
        userEmail,
        isEdit,
      })
      dispatch({ type: ADD_SHARE_SUCCESS })
      getJobs()
      dispatch({ type: CLEAR_VALUES })
    } catch (error) {
      dispatch({ type: ADD_SHARE_ERROR })
    }
    clearAlert()
  }

  const removeShare = async(listId, userId) => {
    dispatch({ type: REMOVE_SHARE_BEGIN })
    try {
      await authFetch.delete(`/list/${listId}/share/?userId=${userId}`)
      dispatch({ type: REMOVE_SHARE_SUCCESS })
      getJobs()
      dispatch({ type: CLEAR_VALUES })
    } catch (error) {
      alert("in removeShare, the error.response.data: " + error.response.data)
      if (error.response.status == 401) return
      dispatch({
        type: REMOVE_SHARE_ERROR,
        payload: { msg: error.response.data.msg },
      })
    }
    clearAlert()
  }

  const showStats = async () => {
    dispatch({ type: SHOW_STATS_BEGIN })
    try {
      const { data } = await authFetch('/jobs/stats')
      dispatch({
        type: SHOW_STATS_SUCCESS,
        payload: {
          stats: data.defaultStats,
          monthlyApplications: data.monthlyApplications,
        },
      })
    } catch (error) {
      // logoutUser()
    }
    clearAlert()
  }
  const clearFilters = () => {
    dispatch({ type: CLEAR_FILTERS })
  }
  const changePage = (page) => {
    dispatch({ type: CHANGE_PAGE, payload: { page } })
  }
  return (
    <AppContext.Provider
      value={{
        ...state,
        displayAlert,
        setupUser,
        toggleSidebar,
        logoutUser,
        updateUser,
        handleChange,
        clearValues,
        createJob,
        getJobs,
        setEditJob,
        shareJob,
        deleteJob,
        editJob,
        showStats,
        clearFilters,
        changePage,
        createTask,
        updateTask,
        deleteTask,
        editListTitle,
        duplicateList,
        addShare,
        removeShare,
      }}
    >
      {children}
    </AppContext.Provider>
  )
}

const useAppContext = () => {
  return useContext(AppContext)
}

export { AppProvider, initialState, useAppContext }
