#!/usr/bin/env node
'use strict';

const program = require('commander');

const resolver = require('gisthrower-resolver');

program
  .version('0.0.1');

program
  .command('authenticate <username> <token>', 'Persist github personal token locally')
  .action(resolver.authenticate);

program.parse(process.argv);
