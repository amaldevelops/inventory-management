#! /usr/bin/env node

const { Pool } = require("pg");

require("dotenv").config();

module.exports = new Pool({
  host: process.env.HOST,
  user: process.env.USER,
  database: process.env.DATABASE_NAME,
  password: process.env.INVENTORY_DATABASE_PASSWORD,
  port: process.env.DATABASE_PORT,
});
