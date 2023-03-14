CREATE TABLE IF NOT EXISTS projects (
  projects_id INT NOT NULL,
  projectsname varchar(250) NOT NULL,
  active boolean not null,
  PRIMARY KEY (projects_id)
);
