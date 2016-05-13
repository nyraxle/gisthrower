'use strict';

const chai = require('chai');
const expect = chai.expect;
const file = require('app-root-path').require('src/node_modules/gisthrower-infrastructure/file.js');

const fs = require('fs');
const appRoot = require('app-root-path');

describe('File - Infrastructure', () => {
  describe('singleFile', () => {
    it('should download a file from a given url', (done) => {
      file.downloadSingleFile('https://gist.githubusercontent.com/raw/365370/8c4d2d43d178df44f4c03a7f2ac0ff512853564e/ring.erl', './', () => {
        const filePath = appRoot.path+'/ring.erl';
        const fileExists = fs.existsSync(filePath, 'utf8');
        expect(fileExists).to.be.true;
        fs.unlinkSync(filePath);
        done();
      });
    });
  });
});
