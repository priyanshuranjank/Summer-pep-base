//logger.js
import chalk from "chalk";

const log = {
  error: (msg) => console.log(chalk.red("Error: ", msg)),
  warn: (msg) => console.log(chalk.magenta("Warn: ", msg)),
  info: (msg) => console.log(chalk.blue("Info: ", msg)),
  success: (msg) => console.log(chalk.greenBright("Success: ", msg))
};

export default log;
