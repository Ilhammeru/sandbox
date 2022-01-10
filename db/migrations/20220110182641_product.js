
exports.up = function(knex) {
  return knex.schema.createTable('product', (table) => {
      table.increments();
      table.string('name').notNullable();
      table.timestamps(true, true);
  }).createTable('product_price', (table) => {
      table.increments();
      table.integer('product_id').references('id').inTable('product');
      table.string('price');
      table.timestamps(true, true);
  })
};

exports.down = function(knex) {
    return knex.schema
    .dropTableIfExists('product')
    .dropTableIfExists('product_price');
};
