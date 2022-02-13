import express from 'express'
const router = express.Router();
import { createJob, getAllJobs, updateJobs, deleteJob, showStats} from '../controllers/jobsController.js';
import authenticateUser from '../middleware/auth'

router.route('/').post(createJob).get(getAllJobs);
// remember about: id
router.route('/stats').get(showStats);
router.route('/:id').delete(deleteJob).patch(updateJobs);


export default router;