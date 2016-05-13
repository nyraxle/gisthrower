#!/usr/bin/env node
'use strict';

const program = require('commander');
const resolver = require('gisthrower-resolver');
const infrastructure = require('gisthrower-infrastructure');
const credentials = require('gisthrower-auth').credentials;

if (!String.prototype.format) {
  String.prototype.format = infrastructure.string.format;
}

const path = credentials.filePath;
infrastructure.json.checkFileOnFirstRun(path);

program
  .version('0.0.1');


var authenticationDataSplit = (val) => {
  var splittedData = val.split(':');
  return {
    username: splittedData[0],
    token: splittedData[1]
  }
};
program
  .option('-a --auth <a>:<b>', 'Persist github personal token locally', authenticationDataSplit);


program
  .command('list')
  .alias('ls')
  .description('List all gists (--all option does the same)')
  .option('-a, --all', 'List all gists')
  .option('-s --starred', 'List only the starred gists from user')
  .option('-f --from-user <username>', 'List all gists from user')
  .action((options) => {
    if (options.starred) {
      resolver.list.starred();
    } else if (options.fromUser) {
      resolver.list.fromUser(options.fromUser);
    } else {
      resolver.list.all();
    }
  });

program.parse(process.argv);

if (program.auth) {
  credentials.setCredentials(program.auth.username, program.auth.token);
}
