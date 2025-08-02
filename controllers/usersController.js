const { body, validationResult, matchedData } = require("express-validator");

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

const usersStorage = require("../model/usersStorage");

exports.usersListGet = (req, res, next) => {
	const users = usersStorage.getUsers();
	console.log(users);
	res.render("index.ejs", { users });
};

exports.usersNewGet = (req, res, next) => {
	res.render("newForm.ejs", { title: "Register user" });
};

exports.usersNewPost = [
	validateUsername,
	(req, res, next) => {
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
		usersStorage.createUser({ username });
		res.status(200).redirect("/");
	},
];
