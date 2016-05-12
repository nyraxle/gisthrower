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

program
  .command('<username> <token>', 'Persist github personal token locally')
  .action((username, token) => {
    credentials.setCredentials(username, token);
  });

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
