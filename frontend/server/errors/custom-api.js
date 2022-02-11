import { StatusCodes } from 'http-status-codes'
import CustomAPIError from './custom-api'

class CustomAPIError extends Error {
    constructor(message) {
        super(message)
    }
}

export default CustomAPIError