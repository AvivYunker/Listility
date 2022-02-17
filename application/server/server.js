import cors from 'cors'
import express from 'express'
import dotenv from 'dotenv'
import 'express-async-error'
import morgan from 'morgan'

import { dirname } from 'path'
import { fileURLToPath } from 'url'
import path from 'path'

import helmet from 'helmet'
import xss from 'xss-clean'
import mongoSanitize from 'express-mongo-sanitize'

// db and authenticateUser
import connectDB from './db/connect.js'

// routers
import authRouter from './routes/authRoutes.js'
import jobsRouter from './routes/jobsRoutes.js'

// middleware
import notFoundMiddleware from './middleware/not-found.js'
import errorHandlerMiddleware from './middleware/error-handler.js'
import authenticateUser from './middleware/auth.js'

const app = express()
dotenv.config()

app.use(cors())

if (process.env.NODE_ENV !== 'production') {
    app.use(morgan('dev'));
}

// console.log('hello');
// console.log('hello');
// console.log('hello');
// console.log('hello');

app.get('/', (req,res) => {
    // throw new Error('error');
    res.json({msg: "Welcome!"});
});

app.get('/api/v1', (req,res) => {
    // throw new Error('error');
    res.json({msg: "API"});
});

// only when ready to deploy
app.use(express.static(path.resolve(__dirname, '../client/build')))

app.use(express.join())
app.use(helmet())
app.use(xss())
app.use(mongoSanitize())

app.use('/api/v1/auth', authRouter);
app.use('/api/v1/jobs', authenticateUser, jobsRouter);

app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, '../client/build', 'index.html'))
})

app.use(notFoundMiddleware)
app.use(errorHandlerMiddleware);

const port = process.env.PORT || 5000

const start = async () => {
    try {
        await connectDB(process.env.MONGO_URL)
        app.listen(port, () => {
            console.log(`Server is listening on port ${port}...`);
        });
    } catch (error) {
        console.log(error);
    }
}

start()