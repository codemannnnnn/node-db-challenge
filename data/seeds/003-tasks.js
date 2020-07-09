exports.seed = function (knex, Promise) {
  return knex("task").insert([
    {
      project_id: 1,
      task_desc: "gather tools",
      task_notes: "nananananaa",
      completed: false,
    },
    {
      project_id: 2,
      task_desc: "gather food",
      task_notes: "nanana",
      completed: false,
    },
    {
      project_id: 3,
      task_desc: "gather people",
      task_notes: "nananana",
      completed: false,
    },
    {
      project_id: 4,
      task_desc: "gather maps",
      task_notes: "nanananasdfasdfa",
      completed: false,
    },
    {
      project_id: 4,
      task_desc: "gather fuel",
      task_notes: "nananasdfasdfasana",
      completed: false,
    },
  ]);
};
