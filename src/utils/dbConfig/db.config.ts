import { connect } from 'mongoose';

const connectionString = `mongodb+srv://${process.env.DB_HOST}/${process.env.DB_NAME}`;

const connection = connect(connectionString, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  user: process.env.DB_USER,
  pass: process.env.DB_PASSWORD,
  useCreateIndex: true
});

export default connection;
