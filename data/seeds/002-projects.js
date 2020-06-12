exports.seed = function (knex, Promise) {
  return knex("project").insert([
    {
      project_name: "Go to the moon",
      project_desc: "fly a space ship to the moon",
      completed: false,
    },
    {
      project_name: "Go to mars",
      project_desc: "fly a space ship to mars",
      completed: false,
    },
    {
      project_name: "Go to jupiter",
      project_desc: "fly a space ship to jupiter",
      completed: false,
    },
    {
      project_name: "Go to venus",
      project_desc: "fly a space ship to venus",
      completed: false,
    },
    {
      project_name: "Go to pluto",
      project_desc: "fly a space ship to pluto",
      completed: false,
    },
  ]);
};
