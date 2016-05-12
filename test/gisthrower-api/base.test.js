'use strict';
const chai = require('chai');
const expect = chai.expect;

const appRoot = require('app-root-path');
const base = appRoot.require('src/node_modules/gisthrower-api/base.js');;

const fs = require('fs');
const testUserName = process.env.TEST_USER;
const testToken = process.env.TEST_TOKEN;

describe('Base', () => {
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

  describe('get', () => {
    it('should respond with api options', (done) => {
      base.get('/')
        .then((result) => {
          expect(result).to.be.an('object');
          done();
        });
    });

    it('should respond with \"Not Found\" on an invalid route', (done) => {
      base.get('/api')
        .catch((error) => {
          done();
        });
    });

    it('should respond with Invalid Credentials with a invalid token', (done) => {
      const filePath = appRoot.path + '\\auth.json';
      const data = {
        username: 'a',
        token: 'b'
      };
      const dataJson = JSON.stringify(data);
      fs.writeFileSync(filePath, dataJson);
      base.get('/api')
        .catch((error) => {
          done();
        });
    });
  });
});
