import chalk from "chalk";

export const logger = {
  info(message) {
    console.log(chalk.blue("[INFO]"), message);
  },

  success(message) {
    console.log(chalk.green("[SUCCESS]"), message);
  },

  warn(message) {
    console.log(chalk.yellow("[WARNING]"), message);
  },

  error(message) {
    console.log(chalk.red("[ERROR]"), message);
  },
};