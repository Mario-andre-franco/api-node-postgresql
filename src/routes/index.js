const express = require('express')

const router = express.Router()

router.get('/api/healthcheck', (req,res) => {
    res.status(200).send({
        success: 'true',
        message: 'HealthCheck ok'
    })
})

module.exports = router