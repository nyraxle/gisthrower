'use strict';
const chai = require('chai');
const expect = chai.expect;

const appRoot = require('app-root-path');
const listApi = appRoot.require('src/node_modules/gisthrower-api/list.api.js');

const string = appRoot.require('src/node_modules/gisthrower-infrastructure/string.pollyfill.js');
if (!String.prototype.format) {
  String.prototype.format = string.format;
}

const fs = require('fs');
const testUserName = process.env.TEST_USER;
const testToken = process.env.TEST_TOKEN;

describe('List API', () => {
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
    it('should respond with a chunk of gists from current user', (done) => {
      listApi.all()
        .then((result) => {
          expect(result).to.not.be.null;
          done();
        });
    });
  });

  describe('starred', () => {
    it('should respond with a chunk of starred gists current user', (done) => {
      listApi.starred()
        .then((result) => {
          expect(result).to.not.be.null;
          done();
        });
    });
  });

  describe('allFromUser', () => {
    it('should respond with a chunk of gists from eduardoarnold', (done) => {
      listApi.fromUser('eduardoarnold')
        .then((result) => {
          expect(result).to.not.be.null;
          done();
        });
    });
  });
});
