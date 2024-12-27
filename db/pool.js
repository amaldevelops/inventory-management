#! /usr/bin/env node

const {Pool}=require("pg");

require("dotenv").config();

console.log(process.env.INVENTORY_DATABASE_PASSWORD)

module.exports=new Pool({
    host:process.env.HOST,
    user:process.env.USER,
    database:"inventory",
    password:process.env.INVENTORY_DATABASE_PASSWORD,
    port:5432

});