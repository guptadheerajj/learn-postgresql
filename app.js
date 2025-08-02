// Example Express.js application
const express = require("express");
require("dotenv").config({ debug: process.env.DEBUG });
const path = require("path");
const app = express();
const port = process.env.PORT;
const assetsPath = process.env.assetsPath || path.join(__dirname, "public");

// routers
const indexRouter = require("./routes/indexRouter");

// Middleware
app.use(express.json());
app.use(express.static(assetsPath));
app.use(express.urlencoded({ extended: true }));

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

// routes
app.use("/", indexRouter);

// Error handling middleware
app.use((err, req, res, next) => {
	console.error(err.stack);
	res.status(500).json({ error: "Something went wrong!" });
});

app.listen(port, () => {
	console.log(`Server is running on port ${port}`);
});
