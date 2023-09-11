/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
  return knex.schema.createTable('e_bike_rentals',(table) => {
    table.increments('id');
    table.string('type', 255);
    table.string('color', 255);
    table.string('years', 255);
    table.integer('price');
    table.string('status', 255);
  })
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
  return knex.schema.dropTable('e_bike_rentals');
};
