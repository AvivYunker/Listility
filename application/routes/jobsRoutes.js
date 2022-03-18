import express from 'express'
const router = express.Router()

import {
  createJob,
  deleteJob,
  getAllJobs,
  updateJob,
  showStats,
  createTask,
} from '../controllers/jobsController.js'

router.route('/').post(createJob).get(getAllJobs)
// router.route('/tasks').post(createTask).get(getAllTasks)
// remember about :id
router.route('/stats').get(showStats)
router.route('/:id').delete(deleteJob).patch(updateJob)

export default router
