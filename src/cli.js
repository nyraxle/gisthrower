#!/usr/bin/env node
'use strict';

const program = require('commander');
const http = require('https');

const credentials = require('gisthrower-auth').credentials;

program
  .version('0.0.1')
  .command('authenticate')
  .action(function (username, token) {
    doTest();
  });

const doTest = () => {
  let user = credentials.getCredentials();

  const options = {
    host: 'api.github.com',
    path: '/gists',
    method: 'GET',
    headers: {
      'User-Agent': 'Ok'
    },
    auth: user.username+':'+user.token
  };

  var req = http.request(options, function(res) {
    console.log('STATUS: ' + res.statusCode);
    console.log('HEADERS: ' + JSON.stringify(res.headers));
    res.setEncoding('utf8');
    res.on('data', function (chunk) {
      console.log('BODY: ' + chunk);
    });
    // write data to request body
  });

  req.on('error', function(e) {
    console.log('problem with request: ' + e.message);
  });

  req.end();
};

program.parse(process.argv);
