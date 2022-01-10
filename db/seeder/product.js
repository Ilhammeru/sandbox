
exports.seed = async function(knex) {
  // truncate all existing table
  await knex.raw('TRUNCATE TABLE "product" CASCADE');
  await knex.raw('TRUNCATE TABLE "product_price" CASCADE');

  await knex('product').insert([
    {
      id: 1,
      name: 'Galaxy buds 3'
    },
    {
      id: 2,
      name: 'Galaxy S21 FE'
    },
  ]);

  await knex('product_price').insert([
    {
      id: 1,
      product_id: 1,
      price: '2000000'
    },
    {
      id: 2,
      product_id: 2,
      price: '5990000'
    },
  ]);
};
