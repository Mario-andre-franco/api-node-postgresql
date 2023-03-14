const db = require('../config/database')


exports.createProject = async (req, res) => {
    const {projectname, active} = req.body 
    const response = await db.query (
        'INSERT INTO projects (projectname, active) VALUES ($1, $2)',
        [projectname,active]
    )

    res.status(201).send({
        message: "Project created",
        body: {
            project: {projectname, active}
        }
    })
}

exports.listAllProjects = async (req,res) => {
    const response = await db.query('SELECT * FROM projects ORDER BY projectname ASC')
    res.status(200).send(response.rows)
}

exports.listOnlyActiveProjects = async (req,res) => {
    const response = await db.query('SELECT * FROM projects WHERE active = true')
    if(response.rows == 0) {
        res.status(200).send('NO ACTIVE PROJECTS')
    }
    else {
        res.status(200).send(response.rows)
    }
    
}