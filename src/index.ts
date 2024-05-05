#!/usr/bin/env node

import { Command } from "commander";
import pjson from '../package.json';

const program = new Command()

program
    .version(pjson.version)
    .name('filvert')

program
    .argument('<source>', 'The name of the source file')
    .argument('<output>', 'The name of the output file')
    .action((message: string): void => {
        console.log(`Hello ${message}`);
    }).description('A CLI tool for converting files format using TypeScript')

program.parse(process.argv)