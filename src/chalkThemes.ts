import chalk from "chalk";

export const cError = (err: string): string => chalk.red.bold(`X ${err}`)
export const cGreen = (msg: string): string => chalk.green(`✓ ${msg}`)
