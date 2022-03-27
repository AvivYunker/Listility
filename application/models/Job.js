import mongoose from 'mongoose'

const JobSchema = new mongoose.Schema(
  {
    listTitle: {
      type: String,
      default: '',
      required: true,
    },
    createdBy: {
      type: mongoose.Types.ObjectId,
      ref: 'User',
      required: [true, 'Please provide user'],
    },
    taskList: {
      type: mongoose.Types.ObjectId,
      complete: {
        type: Boolean,
        default: false,
      }
    }
  },
  { timestamps: true }
)

export default mongoose.model('Job', JobSchema)