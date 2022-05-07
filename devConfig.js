const path = require("path");

require("dotenv").config({ path: path.join(__dirname,'.env') })

module.exports = {
    db_username: process.env.db_username,
    db_password: process.env.db_password,
    db_database: process.env.db_database,
    db_host: process.env.db_host,
    db_dialect: process.env.db_dialect,
    db_seeder_Admin_password:process.env.seeder_Admin_password,
    access_token_privateKey: process.env.access_token_privateKey,
    cloud_name:process.env.cloud_name,
    api_key:process.env.api_key,
    api_secret:process.env.api_secret
}