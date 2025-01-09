/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.seed = async function (knex) {
  await knex("fruits").truncate(); // leaves the database in the same state after rollback
  await knex("fruits").insert([
    {
      fruit_name: "apple",
      avg_weight_oz: 1.4,
      delicious: null,
      color: "green",
    },
    { fruit_name: "orange", avg_weight_oz: 2.5, delicious: true, color: "red" },
    { fruit_name: "pear", avg_weight_oz: 0.5, delicious: 0, color: "green" },
  ]);
};
