const pool = require("./pool");

async function getAllUsernames() {
	const { rows } = await pool.query("SELECT * FROM username");
	return rows;
}

async function insertUsername(username) {
	// the following is sql injection
	// await pool.query("INSERT INTO usernames (username) VALUES ('" + username + "')");
	await pool.query("INSERT INTO username (username) VALUES ($1)", [username]);
}

module.exports = {
	getAllUsernames,
	insertUsername,
};
