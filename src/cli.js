#!/usr/bin/env node

const program = require('commander');

program
  .version('0.0.1')
  .command('auth <userName> <passWord>')
  .action(function (userName, passWord) {
  });

program.parse(process.argv);
