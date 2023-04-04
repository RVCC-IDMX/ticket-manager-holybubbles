const chalk = require('chalk');
const log = console.log;

class EmailService {
  send(email) {
    log(chalk.green.dim(`Sending email to ${email}\n`));
  }
}

module.exports = EmailService;