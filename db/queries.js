const pool = require("./pool");

async function getAllUsernames() {
	const res = await pool.query("SELECT * FROM usernames");
	return res;
}

async function insertUsername(username) {
	// the following leads to sql injection
	// await pool.query("INSERT INTO usernames (username) VALUES ('" + username + "')");
	await pool.query("INSERT INTO usernames (username) VALUES ($1)", [
		username,
	]);
}

async function searchUser(searchTerm) {
	const res = await pool.query(
		"SELECT username FROM usernames WHERE username LIKE $1",
		[`%${searchTerm}%`],
	);
	return res;
}

module.exports = {
	getAllUsernames,
	insertUsername,
	searchUser,
};
