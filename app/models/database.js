// Ett test bara!

const pg = require('pg');

const connectionString = process.env.DATABASE_URL || 'postgres://localhost:5432/testdatabase';

const client = new pg.Client(connectionString);
client.connect();
const query = client.query(
  'CREATE TABLE test(id SERIAL PRIMARY KEY, text VARCHAR(40) not null, funkar BOOLEAN)');
query.on('end', () => { client.end(); });

