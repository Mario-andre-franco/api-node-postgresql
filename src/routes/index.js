const express = require('express')

const router = express.Router()

router.get('/healthcheck', (req,res) => {
    res.status(200).send({
        success: 'true',
        message: 'HealthCheck ok'
    })
})

module.exports = router