class usersStorage {
	constructor() {
		this.db = {};
		this.id = 0;
	}

	createUser({ username }) {
		console.log("username to be saved: ", username);
		this.db[this.id] = { username, id: this.id };
		this.id++;
	}

	getUsers() {
		console.log("usernames will be logged here - wip");
		return Object.values(this.db);
	}
}

module.exports = new usersStorage();
