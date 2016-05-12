'use strict';

const chai = require('chai');
const expect = chai.expect;
const fs = require('fs');
const json = require('app-root-path').require('src/node_modules/gisthrower-infrastructure/json.js');

describe('Json Reader/Writer', () => {
  it ('should export an object', () => {
    expect(json).to.be.an('Object');
  });

  describe('Properties', () => {
    it('should contains checkFileOnFirstRun closure', () => {
      expect(json).to.have.ownProperty('checkFileOnFirstRun').that.is.an('object');
    });
    it('should contains readFile closure', () => {
      expect(json).to.have.ownProperty('readFile').that.is.an('object');
    });
    it('should contains writeFile closure', () => {
      expect(json).to.have.ownProperty('writeFile').that.is.an('object');
    });
  });

  describe('checkFileOnFirstRun', () => {
    it('should create a json file if it not exists', () => {
      const path = '../auth.json';
      json.checkFileOnFirstRun(path);
      const fileExists = fs.existsSync(path, 'utf8');
      expect(fileExists).to.be.true;
      fs.unlinkSync(path);
    });
  });

  describe('writeFile', () => {
    it('should write { username: \'name\', token: \'123\'  } on file', () => {
      const path = '../auth.json';
      const data = {
        username: 'name',
        token: '123'
      };
      json.writeFile(path,data);

      const fileExists = fs.existsSync(path, 'utf8');
      expect(fileExists).to.be.true;

      const fileBody = JSON.parse(fs.readFileSync(path, { encoding: 'utf8' }));
      expect(fileBody).to.have.ownProperty('username');
      expect(fileBody.username).to.equals('name');

      fs.unlinkSync(path);
    });
  });

  describe('readFile', () => {
    it('should read { username: \'name\', token: \'123\'  } from file', () => {
      const path = '../auth.json';
      const data = {
        username: 'name',
        token: '123'
      };
      const dataJson = JSON.stringify(data);
      fs.writeFileSync(path, dataJson);
      const fileBody = json.readFile(path);
      expect(fileBody).to.have.ownProperty('username');
      expect(fileBody.username).to.equals('name');
      expect(fileBody).to.have.ownProperty('token');
      expect(fileBody.token).to.equals('123');
    });
  });
});
