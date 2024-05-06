#!/usr/bin/env node

import { Command } from "commander";
import figlet from 'figlet'
import pjson from '../package.json';

const program = new Command()

program
    .version(pjson.version)
    .name(pjson.name)
    .description('A CLI tool for converting files format written in TypeScript')

program
    // .action(() => {
    //     console.log(`welcome to ${pjson.name}`)
    //     program.help()
    // })
    .argument('[source]', 'The name of the source file')
    .argument('[output]', 'The name of the output file')
    .action((source: string, output: string): void => {
        console.log(`Hello ${source}`);
    })

if (process.argv.length === 2) {
    console.log(
        figlet.textSync("Filvert", {
            horizontalLayout: "default",
            verticalLayout: "default",
            width: 80,
            whitespaceBreak: true,
        })
    );
    program.help()
}
program.parse(process.argv)