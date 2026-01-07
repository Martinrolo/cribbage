import express from 'express'
import { __dirname } from '../../public/getDirectory.js'

const router = express.Router()

router.get('/', (req, res) => {
    res.sendFile('/pages/menu.html', { root: __dirname })
})

router.get('/cribbage', (req, res) => {
    res.sendFile('/pages/cribbage.html', { root: __dirname })
})

export default router