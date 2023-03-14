const router = require('express-promise-router')()
const projectController = require('../controllers/project.controller')


router.post('/projects', projectController.createProject);

router.get('/projects', projectController.listAllProjects)

module.exports = router;

