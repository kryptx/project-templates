const bunyan = require('bunyan');
const config = require('./config');
const log = bunyan.createLogger({ name: "_APP_NAME_" });

log.info("Starting app...");

async function start() {
  console.log(`Hello, ${config.get('examples.name')}!`);
}

start().then(() => log.info("Shutting down..."));
