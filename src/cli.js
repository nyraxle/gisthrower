#!/usr/bin/env node
'use strict';

const program = require('commander');

const params = require('gisthrower-params');
const args = params.args;
const resolver = params.resolver;

program
  .version('0.0.1')
  .command(args.command.AUTHENTICATION)
  .action(resolver.authenticate);

program.parse(process.argv);
