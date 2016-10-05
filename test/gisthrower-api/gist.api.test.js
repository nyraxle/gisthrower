'use strict';
const chai = require('chai');
const expect = chai.expect;

const appRoot = require('app-root-path');
const gistApi = appRoot.require('src/node_modules/gisthrower-api/gist.api.js');

const string = appRoot.require('src/node_modules/gisthrower-infrastructure/string.pollyfill.js');
if (!String.prototype.format) {
  String.prototype.format = string.format;
}

const fs = require('fs');
const testUserName = process.env.TEST_USER;
const testToken = process.env.TEST_TOKEN;

describe('Gist API', () => {
  before(function() {
    const filePath = appRoot.path + '\\auth.json';
    const data = {
      username: testUserName,
      token: testToken
    };
    const dataJson = JSON.stringify(data);
    fs.writeFileSync(filePath, dataJson);
  });

  after(function() {
    const filePath = appRoot.path + '\\auth.json';
    fs.unlinkSync(filePath);
  });

  describe('all', () => {
    it('should respond with a chunk of gist from given gist id', (done) => {
      gistApi.get('b1c9a89781d66e9d2cf6')
        .then((result) => {
          expect(result).to.not.be.null;
          done();
        });
    });
  });
});
