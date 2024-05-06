#!/usr/bin/env node

import { Command } from "commander";
import figlet from 'figlet'
import { convert } from "./convert";
import pjson from '../package.json';

const program = new Command()

program
    .version(pjson.version)
    .name(pjson.name)
    .description('A CLI tool for converting files format written in TypeScript')

program
    .argument('<source>', 'The name of the source file')
    .argument('<output>', 'The name of the output file')
    .action((source: string, output: string): void => {
        try {
            convert(source, output)
        } catch (error: any) {
            program.error(error)
        }
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