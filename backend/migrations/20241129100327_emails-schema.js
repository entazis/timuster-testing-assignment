export function up(knex) {
  return knex.schema.createTableIfNotExists("emails", function (table) {
    table.increments("id").primary();
    table.string("to");
    table.string("cc");
    table.string("bcc");
    table.string("subject");
    table.text("body");
    table.timestamps(true, true);
  });
}

export function down(knex) {
  return knex.schema.dropTable("emails");
}
