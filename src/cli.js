#!/usr/bin/env node
'use strict';

const program = require('commander');
const resolver = require('gisthrower-resolver');
const string = require('gisthrower-infrastructure').string;

if (!String.prototype.format) {
  String.prototype.format = string.format;
}

program
  .version('0.0.1');

program
  .command('auth <username> <token>', 'Persist github personal token locally')
  .action(resolver.authenticate);

program
  .command('list')
  .alias('ls')
  .description('List all gists (--all option does the same)')
  .option("-a, --all", "List all gists")
  .option("-s --starred", "List only the starred gists from user")
  .action(resolver.list);

program.parse(process.argv);
