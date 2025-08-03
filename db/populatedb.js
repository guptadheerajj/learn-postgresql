const { Client } = require("pg");
const { argv } = require("process");
require("dotenv").config({ debug: process.env.DEBUG });

const dbUser = process.env.DB_USER;
const dbPassword = process.env.DB_PASSWORD;
const dbHost = process.env.DB_HOST;
const dbPort = process.env.DB_PORT;
const database = process.env.DATABASE;

const connectionString =
	argv[2] ||
	`postgresql://${dbUser}:${dbPassword}@${dbHost}:${dbPort}/${database}`;

const SQL = `
	CREATE TABLE IF NOT EXISTS usernames (
		id INTEGER PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
		username VARCHAR ( 255 )
	);
`;

async function main() {
	console.log("sending...");
	const client = new Client({ connectionString });
	await client.connect();
	await client.query(SQL);
	await client.end();
	console.log("Done");
}

main();
