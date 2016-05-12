'use strict';

const chai = require('chai');
const expect = chai.expect;

const fs = require('fs');
const credentials = require('app-root-path').require('src/node_modules/gisthrower-auth/credentials.js');;
const appRoot = require('app-root-path');
const filePath = appRoot.path + '\\auth.json';

describe('Credentials', () => {
  it ('should export an object', () => {
    expect(credentials).to.be.an('Object');
  });

  describe('Properties', () => {
    it('should contains setCredentials closure', () => {
      expect(credentials).to.have.ownProperty('setCredentials');
      expect(credentials.setCredentials).to.be.an('function');
    });

    it('should contains getCredentials closure', () => {
      expect(credentials).to.have.ownProperty('getCredentials');
      expect(credentials.getCredentials).to.be.an('function');
    });

    it('should contains getCredentials', () => {
      expect(credentials).to.have.ownProperty('filePath');
    });
  });

  describe('setCredentials', () => {
    it('should write { username: \'name\', token: \'123\'  } on auth.json file', () => {
      const path = '../auth.json';
      const data = {
        username: 'name',
        token: '123'
      };

      credentials.setCredentials('name', '123');

      const fileExists = fs.existsSync(filePath, 'utf8');
      expect(fileExists).to.be.true;

      const fileBody = JSON.parse(fs.readFileSync(filePath, { encoding: 'utf8' }));
      expect(fileBody).to.have.ownProperty('username');
      expect(fileBody.username).to.equals('name');
      expect(fileBody).to.have.ownProperty('token');
      expect(fileBody.token).to.equals('123');

      fs.unlinkSync(filePath);
    });
  });

  describe('getCredentials', () => {
    it('should read { username: \'name\', token: \'123\'  } from auth.json file', () => {
      const data = {
        username: 'test',
        token: '234'
      };
      const dataJson = JSON.stringify(data);
      fs.writeFileSync(filePath, dataJson);

      const fileBody = credentials.getCredentials(filePath);
      expect(fileBody).to.have.ownProperty('username');
      expect(fileBody.username).to.equals('test');
      expect(fileBody).to.have.ownProperty('token');
      expect(fileBody.token).to.equals('234');

      fs.unlinkSync(filePath);
    });
  });

  describe('filePath', () => {
    it('should return a string with auth.json location path', () => {
      expect(credentials.filePath).to.be.a('string');
    });
  })
});
