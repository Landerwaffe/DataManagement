const { Client } = require("pg");
const client = new Client({
  user: "postgres",
  host: "localhost",
  database: "ResumeCRM",
  password: "admin",
  port: 5432,
});
client.connect();

client.query(`Select * from users`, (err, res) => {
  if (!err) {
    console.log(res.rows);
  } else {
    console.log(err.message);
  }
  client.end();
});
