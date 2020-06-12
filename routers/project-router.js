const express = require("express");

const router = express.Router();

const db = require("../data/config.js");

router.get("/", (req, res) => {
  db("project").then((e) => res.json(e));
});

router.get("/all", (req, res) => {
  db("project")
    .join("task", "task.project_id", "project.id")
    .join("resources", "resources.project_id", "project.id")
    .select(
      "project.project_name",
      "task.project_id",
      "task.task_desc",
      "task.task_notes",
      "resources.res_name"
    )
    .then((e) => res.json(e))
    .catch((err) => console.log(err));
});

router.post("/newproj", (req, res) => {
  db("project")
    .insert(req.body)
    .then((ids) => {
      const id = ids[0];
      db("project")
        .where({ id })
        .first()
        .then((e) => {
          res.json(e);
        });
    })
    .catch((err) => console.log(err));
});

router.get("/tasks", (req, res) => {
  db("task")
    .select("project_id", "task_desc", "task_notes", "completed")
    .then((e) => res.json(e))
    .catch((err) => console.log(err));
});

router.post("/newtask", (req, res) => {
  db("task")
    .insert(req.body)
    .then((ids) => {
      const id = ids[0];
      db("task")
        .where({ id })
        .first()
        .then((e) => {
          res.json(e);
        });
    })
    .catch((err) => console.log(err));
});

module.exports = router;
