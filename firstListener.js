const TicketManager = require("./ticketManager");
const chalk = require('chalk');
const log = console.log;


const ticketManager = new TicketManager(10);

ticketManager.on("buy", () => {
  log(chalk.grey.dim("Someone bought a ticket!"));
});

ticketManager.buy("test@email.com", 20);
ticketManager.buy("test@email.com", 20);

ticketManager.once("buy", () => {
  log(chalk.red.bold("This is only called once"));
});

ticketManager.buy("test@email.com", 20);
ticketManager.buy("test@email.com", 20);