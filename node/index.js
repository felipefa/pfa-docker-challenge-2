import express from 'express';
import mysql from 'mysql';

const db = mysql.createConnection({
  host: process.env.MYSQL_HOST,
  database: process.env.MYSQL_DATABASE,
  user: process.env.MYSQL_ROOT_USER,
  password: process.env.MYSQL_ROOT_PASSWORD,
});

db.connect((connectionError) => {
  if (connectionError) throw connectionError;

  console.log('🔌 DB connected!');
});

const app = express();

app.get('/', (_, res) => {
  return db.query(`SELECT * FROM modules`, (selectError, modules) => {
    if (selectError) throw selectError;

    console.log('📚 Modules successfully queried!');

    return res.send(modules);
  });
});

const { PORT = 3000 } = process.env;

app.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`);
});
