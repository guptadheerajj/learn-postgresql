const { body, validationResult, matchedData } = require("express-validator");
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

exports.usersListGet = async (req, res, next) => {
	// const users = usersStorage.getUsers();
	const users = await db.getAllUsernames();
	console.log(users);
	res.render("index.ejs", { users });
};

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
