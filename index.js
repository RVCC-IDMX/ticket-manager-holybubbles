const chalk = require('chalk');
const log = console.log;
const log_error = chalk.bold.red;
const log_msg = chalk.dim.grey;

const TicketManager = require("./ticketManager");
const EmailService = require("./emailService");
const DatabaseService = require("./databaseService");

const ticketManager = new TicketManager(3);
const emailService = new EmailService();
const databaseService = new DatabaseService();


ticketManager.on("buy", (email, price, timestamp) => {
  emailService.send(email);
  databaseService.save(email, price, timestamp);
});

ticketManager.on("error", (error) => {
  console.error(log_error(`Gracefully handling our error: ${error}`));
});

log(chalk.underline(`We have ${ticketManager.listenerCount("buy")} listener(s) for the buy event`));
log(chalk.underline(`We have ${ticketManager.listenerCount("error")} listener(s) for the error event\n\n`));

const onBuy = () => {
  log(log_error("I will be removed soon\n"));
};


ticketManager.on("buy", onBuy);
log(log_msg(`We added a new event listener bringing our total count for the buy event to: ${ticketManager.listenerCount("buy")}\n`));
ticketManager.buy("test@email", 20);

ticketManager.off("buy", onBuy);

log(log_msg(`We now have: ${ticketManager.listenerCount("buy")} listener(s) for the buy event\n`));
ticketManager.buy("test@email", 20);

ticketManager.removeAllListeners("buy");
log(log_msg(`We have ${ticketManager.listenerCount("buy")} listeners for the buy event`));
ticketManager.buy("test@email", 20);
log(log_error("\n\nThe last ticket was bought"));