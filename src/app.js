import express from 'express'
import { __dirname } from '../public/getDirectory.js'
import pageRoutes from './routes/pages.js'

const app = express()

app.use(express.static(__dirname))
app.use('/', pageRoutes)

export default app