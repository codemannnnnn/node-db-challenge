exports.seed = function (knex, Promise) {
  return knex("resources").insert([
    {
      project_id: 1,
      res_name: "computer",
      res_desc: "nananananaa",
    },
    {
      project_id: 2,
      res_name: "drill",
      res_desc: "nanana",
    },
    {
      project_id: 3,
      res_name: "people",
      res_desc: "nananana",
    },
    {
      project_id: 4,
      res_name: "maps",
      res_desc: "nanananasdfasdfa",
    },
    {
      project_id: 5,
      res_name: "fuel",
      res_desc: "nananasdfasdfasana",
    },
  ]);
};
