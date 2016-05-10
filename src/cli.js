#!/usr/bin/env node

const program = require('commander');

const credentials = require('gisthrower-auth').credentials;

program
  .version('0.0.1')
  .command('auth')
  .action(function () {
    doTest();
  });

const doTest = () => {
  console.log(credentials.getCredentials());
};

program.parse(process.argv);
