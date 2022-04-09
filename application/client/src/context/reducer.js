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

  CREATE_JOB_BEGIN,
  CREATE_JOB_SUCCESS,
  CREATE_JOB_ERROR,
  
  GET_JOBS_BEGIN,
  GET_JOBS_SUCCESS,
  
  SET_EDIT_JOB,
  DELETE_JOB_BEGIN,
  EDIT_JOB_BEGIN,
  EDIT_JOB_SUCCESS,
  EDIT_JOB_ERROR,
  SHOW_STATS_BEGIN,
  SHOW_STATS_SUCCESS,
  CLEAR_FILTERS,
  CHANGE_PAGE,

  UPDATE_TASK_BEGIN,
  UPDATE_TASK_SUCCESS,
  UPDATE_TASK_ERROR,

  CREATE_TASK_BEGIN,
  CREATE_TASK_SUCCESS,
  CREATE_TASK_ERROR,

  DELETE_TASK_BEGIN,
  DELETE_TASK_SUCCESS,
  DELETE_TASK_ERROR,

  LIST_TITLE_BEGIN,
  LIST_TITLE_SUCCESS,
  LIST_TITLE_ERROR,

  DUPLICATE_LIST_BEGIN,
  DUPLICATE_LIST_SUCCESS,
  DUPLICATE_LIST_ERROR,

  // EDIT_TASK_BEGIN,
  // EDIT_TASK_SUCCESS,
  // EDIT_TASK_ERROR,

} from './actions'

import { initialState } from './appContext'

const reducer = (state, action) => {
  if (action.type === DISPLAY_ALERT) {
    return {
      ...state,
      showAlert: true,
      alertType: 'danger',
      alertText: 'Please provide all values!',
    }
  }
  if (action.type === CLEAR_ALERT) {
    return {
      ...state,
      showAlert: false,
      alertType: '',
      alertText: '',
    }
  }

  if (action.type === SETUP_USER_BEGIN) {
    return { ...state, isLoading: true }
  }
  if (action.type === SETUP_USER_SUCCESS) {
    return {
      ...state,
      isLoading: true,
      token: action.payload.token,
      user: action.payload.user,
      userLocation: action.payload.location,
      listTitle: action.payload.location,
      showAlert: true,
      alertType: 'success',
      alertText: action.payload.alertText,
    }
  }
  if (action.type === SETUP_USER_ERROR) {
    return {
      ...state,
      isLoading: false,
      showAlert: true,
      alertType: 'danger',
      alertText: action.payload.msg,
    }
  }
  if (action.type === TOGGLE_SIDEBAR) {
    return {
      ...state,
      showSidebar: !state.showSidebar,
    }
  }
  if (action.type === LOGOUT_USER) {
    return {
      ...initialState,
      user: null,
      token: null,
      listTitle: '',
      userLocation: '',
    }
  }
  if (action.type === UPDATE_USER_BEGIN) {
    return { ...state, isLoading: true }
  }
  if (action.type === UPDATE_USER_SUCCESS) {
    return {
      ...state,
      isLoading: false,
      token: action.payload.token,
      user: action.payload.user,
      userLocation: action.payload.location,
      listTitle: action.payload.location,
      showAlert: true,
      alertType: 'success',
      alertText: 'User Profile Updated!',
    }
  }
  if (action.type === UPDATE_USER_ERROR) {
    return {
      ...state,
      isLoading: false,
      showAlert: true,
      alertType: 'danger',
      alertText: action.payload.msg,
    }
  }
  if (action.type === HANDLE_CHANGE) {
    return {
      ...state,
      page: 1,
      [action.payload.name]: action.payload.value,
    }
  }
  if (action.type === CLEAR_VALUES) {
    const initialState = {
      isEditing: false,
      editJobId: '',
      position: '',
      company: '',
      listTitle: state.userLocation,
      jobType: 'full-time',
      status: 'pending',
    }

    return {
      ...state,
      ...initialState,
    }
  }
  if (action.type === CREATE_JOB_BEGIN) {
    // console.log("The request had begun...")
    return { ...state, isLoading: true }
  }

  if (action.type === CREATE_JOB_SUCCESS) {
    // console.log("The request had succeeded!")
    return {
      ...state,
      isLoading: false,
      showAlert: true,
      alertType: 'success',
      alertText: 'New List Created!',
    }
  }
  if (action.type === CREATE_JOB_ERROR) {
    // console.log("The request made an error...")
    return {
      ...state,
      isLoading: false,
      showAlert: true,
      alertType: 'danger',
      alertText: action.payload.msg,
    }
  }
  if (action.type === GET_JOBS_BEGIN) {
    return { ...state, isLoading: true, showAlert: false }
  }
  if (action.type === GET_JOBS_SUCCESS) {
    return {
      ...state,
      isLoading: false,
      jobs: action.payload.jobs,
      totalJobs: action.payload.totalJobs,
      numOfPages: action.payload.numOfPages,
    }
  }
  if (action.type === SET_EDIT_JOB) {
    const job = state.jobs.find((job) => job._id === action.payload.id)
    const { _id, position, company, listTitle, jobType, status } = job
    return {
      ...state,
      isEditing: true,
      editJobId: _id,
      position,
      company,
      listTitle,
      jobType,
      status,
    }
  }
  if (action.type === DELETE_JOB_BEGIN) {
    return { ...state, isLoading: true }
  }
  if (action.type === EDIT_JOB_BEGIN) {
    return {
      ...state,
      isLoading: true,
    }
  }
  if (action.type === EDIT_JOB_SUCCESS) {
    return {
      ...state,
      isLoading: false,
      showAlert: true,
      alertType: 'success',
      alertText: 'Job Updated!',
    }
  }
  if (action.type === EDIT_JOB_ERROR) {
    return {
      ...state,
      isLoading: false,
      showAlert: true,
      alertType: 'danger',
      alertText: action.payload.msg,
    }
  }
  if (action.type === CREATE_TASK_BEGIN) {
    return { ...state, isLoading: true }
  }

  if (action.type === CREATE_TASK_SUCCESS) {
    return {
      ...state,
      isLoading: false,
      showAlert: true,
      alertType: 'success',
      alertText: 'New Task Created!',
    }
  }
  if (action.type === CREATE_TASK_ERROR) {
    return {
      ...state,
      isLoading: false,
      showAlert: true,
      alertType: 'danger',
      alertText: action.payload.msg,
    }
  }
  if (action.type === SHOW_STATS_BEGIN) {
    return {
      ...state,
      isLoading: true,
      showAlert: false,
    }
  }
  if (action.type === SHOW_STATS_SUCCESS) {
    return {
      ...state,
      isLoading: false,
      stats: action.payload.stats,
      monthlyApplications: action.payload.monthlyApplications,
    }
  }
  if (action.type === CLEAR_FILTERS) {
    return {
      ...state,
      search: '',
      searchStatus: 'all',
      searchType: 'all',
      sort: 'latest',
    }
  }
  if (action.type === CHANGE_PAGE) {
    return { ...state, page: action.payload.page }
  }

  if (action.type === UPDATE_TASK_BEGIN) {
    return { ...state, isLoading: true }
  }
  if (action.type === UPDATE_TASK_SUCCESS) {
    return {
      ...state,
      isLoading: false,
      isChecked: action.payload.isChecked,
      taskId: action.payload.taskId,
      taskTitle: action.payload.taskTitle,
      listTitle: action.payload.location,
      showAlert: true,
      alertType: 'success',
      alertText: 'Task Updated!',
    }
  }
  if (action.type === UPDATE_TASK_ERROR) {
    return {
      ...state,
      isLoading: false,
      showAlert: true,
      alertType: 'danger',
      alertText: action.payload.msg,
    }
  }
  if (action.type === DELETE_TASK_BEGIN) {
    return { ...state, isLoading: true }
  }
  if (action.type === DELETE_TASK_SUCCESS) {
    return {
      ...state,
      isLoading: false,
      showAlert: true,
      alertType: 'success',
      alertText: 'Task Deleted!',
    }
  }
  if (action.type === DELETE_TASK_ERROR) {
    return {
      ...state,
      isLoading: false,
      showAlert: true,
      alertType: 'danger',
      alertText: action.payload.msg,
    }
  }

  if (action.type === LIST_TITLE_BEGIN) {
    return { ...state, isLoading: true }
  }
  if (action.type === LIST_TITLE_SUCCESS) {
    return {
      ...state,
      isLoading: false,
      isChecked: action.payload.isChecked,
      taskId: action.payload.taskId,
      taskTitle: action.payload.taskTitle,
      listTitle: action.payload.location,
      showAlert: true,
      alertType: 'success',
      alertText: 'Task Updated!',
    }
  }
  if (action.type === LIST_TITLE_ERROR) {
    return {
      ...state,
      isLoading: false,
      showAlert: true,
      alertType: 'danger',
      alertText: action.payload.msg,
    }
  }
  if (action.type === DUPLICATE_LIST_BEGIN) {
    // console.log("The request had begun...")
    return { ...state, isLoading: true }
  }

  if (action.type === DUPLICATE_LIST_SUCCESS) {
    // console.log("The request had succeeded!")
    return {
      ...state,
      isLoading: false,
      showAlert: true,
      alertType: 'success',
      alertText: 'New List Created!',
    }
  }
  if (action.type === DUPLICATE_LIST_ERROR) {
    // console.log("The request made an error...")
    return {
      ...state,
      isLoading: false,
      showAlert: true,
      alertType: 'danger',
      alertText: action.payload.msg,
    }
  }

  // export const LIST_TITLE_BEGIN = 'LIST_TITLE_BEGIN'
  // export const LIST_TITLE_SUCCESS = 'LIST_TITTLE_SUCCESS'
  // export const LIST_TITLE_ERROR = 'LIST_TITLE_ERROR'

  // throw new Error(`no such action : ${action.type}`)
}

export default reducer