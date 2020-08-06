import knex from 'knex';

const db = knex({
  client: 'pg',
  connection: {
    host: '',
    user: '',
    password: '',
    database: '',
  },
});

export default db;
