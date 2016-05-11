#!/usr/bin/env node
'use strict';

const program = require('commander');
const resolver = require('gisthrower-resolver');

program
  .version('0.0.1');

program
  .command('auth <username> <token>', 'Persist github personal token locally')
  .action(resolver.authenticate);

program
  .command('list')
  .alias('ls')
  .description('List all gists')
  .option("-a, --all", "All")
  .action(resolver.list);

program.parse(process.argv);
