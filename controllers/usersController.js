const {
	body,
	query,
	validationResult,
	matchedData,
} = require("express-validator");
// const usersStorage = require("../model/usersStorage");
const db = require("../db/queries");

const validateUsername = body("username")
	.trim()
	.escape()
	.notEmpty()
	.withMessage("Please enter username")
	.bail()
	.isAlpha()
	.withMessage("Please enter alphabets only")
	.bail()
	.isLength({ min: 3, max: 20 });

const validateUserSearch = query("search")
	.optional()
	.trim()
	.notEmpty()
	.withMessage("Please enter a keyword")
	.bail()
	.isAlpha()
	.withMessage("Please enter alphabets only")
	.bail()
	.isLength({ min: 1, max: 20 })
	.withMessage("Search term must contain between 1 to 20 characters");

exports.usersListGet = [
	validateUserSearch,
	async (req, res, next) => {
		// const users = usersStorage.getUsers();
		const errors = validationResult(req);

		// If validation errors exist, return early with error
		if (!errors.isEmpty()) {
			return res.status(400).render("index.ejs", {
				users: [],
				error: errors.array(),
			});
		}
		const data = matchedData(req, { locations: ["query"] });

		let users = null;
		if (data.search) {
			users = await db.searchUser(data.search);
		} else {
			users = await db.getAllUsernames();
		}

		console.log(users.rows);

		if (users.rowCount === 0) {
			res.render("index.ejs", {
				users: users.rows,
				error: [{ msg: "No user was found" }],
			});
		} else {
			res.render("index.ejs", { users: users.rows });
		}
	},
];

exports.usersNewGet = (req, res, next) => {
	res.render("newForm.ejs", { title: "Register user" });
};

exports.usersNewPost = [
	validateUsername,
	async (req, res, next) => {
		const error = validationResult(req);
		if (!error.isEmpty()) {
			res.status(400).render("newForm.ejs", {
				title: "Register User",
				error: error.array(),
				username: req.body.username,
			});
			return;
		}
		const { username } = matchedData(req, { locations: ["body"] });
		// usersStorage.createUser({ username });
		await db.insertUsername(username);
		res.status(200).redirect("/");
	},
];
