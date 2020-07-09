exports.up = function (knex) {
  return knex.schema
    .createTable("project", (tbl) => {
      tbl.increments();
      tbl.text("project_name", 128).notNullable();
      tbl.text("project_desc", 128);
      tbl.boolean("completed").notNullable();
    })
    .createTable("task", (tbl) => {
      tbl.increments();
      tbl
        .integer("project_id")
        .unsigned()
        .notNullable()
        .references("project.id")
        .onUpdate("CASCADE")
        .onDelete("CASCADE");
      tbl.text("task_desc", 128).notNullable();
      tbl.text("task_notes", 128);
      tbl.boolean("completed").notNullable();
    })

    .createTable("resources", (tbl) => {
      tbl.increments();
      tbl
        .integer("project_id")
        .unsigned()
        .notNullable()
        .references("project.id")
        .onUpdate("CASCADE")
        .onDelete("CASCADE");
      tbl.text("res_name", 128).unique().notNullable();
      tbl.text("res_desc", 128);
    });
};

exports.down = function (knex) {
  return knex.schema
    .dropTableIfExists("resources")
    .dropTableIfExists("task")
    .dropTableIfExists("project");
};
