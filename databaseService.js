const chalk = require('chalk');
const log = console.log;

class DatabaseService {
  save(email, price, timestamp) {
    log(chalk.underline(`\tRunning query: INSERT INTO orders VALUES (email, price, created) VALUES (${email}, ${price}, ${timestamp})\n`));
  }
}

module.exports = DatabaseService;