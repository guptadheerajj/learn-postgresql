const { Pool } = require("pg");

module.exports = new Pool({
	host: process.env.DB_HOST,
	user: process.env.DB_USER,
	database: process.env.DATABASE,
	password: process.env.DB_PASSWORD,
	port: process.env.DB_PORT,
});

// module.exports = new Pool({
//   connectionString: "postgresql://<role_name>:<role_password>@localhost:5432/top_users"
// });

// or

// const pool = new Pool();
// exports.query = (text, params) => pool.query(text, params)
// };
