import { createServer } from 'http';
import { config } from 'dotenv';
import { resolve } from 'path';
/**
 * Load Env
 */
config({ path: resolve(__dirname, '../.env') });

/**
 * Load App
 */
import app from './app';
import dbConnection from './utils/dbConfig';
import mongoose from 'mongoose';

const port = process.env.PORT || 8080;
const server = createServer(app);

function exitHandler() {
  console.log(`Closing http server.`);
  server.close(() => {
    console.log(`Http server closed.`);
    mongoose.connection.close(function () {
      console.log(`Mongoose connection disconnected`);
      process.exit(1);
    });
  });
}

[`exit`, `SIGINT`, `SIGUSR1`, `SIGUSR2`, `uncaughtException`, `SIGTERM`, `EADDRINUSE`].forEach((eventType) => {
  (process as NodeJS.EventEmitter).on(eventType, exitHandler.bind(null, eventType));
});

try {
  dbConnection.then(() => {
    console.log(`DB Connection has been established successfully`);
    server.listen(port, () => {
      console.log(`Server is running on ${port}`);
    });
  });
} catch (e) {
  console.error(`Unable to connect to the server ${e}`);
  process.exit(1);
}
