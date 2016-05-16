'use strict';

const chai = require('chai');
const expect = chai.expect;
const file = require('app-root-path').require('src/node_modules/gisthrower-infrastructure/file.js');

const fs = require('fs');
const appRoot = require('app-root-path');

describe('File - Infrastructure', () => {

  describe('downloadSingleFile', () => {
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

  describe('downloadMultipleFile', () => {
    it('should files from multiple urls', (done) => {
      const urls = [
        'https://gist.githubusercontent.com/raw/365370/8c4d2d43d178df44f4c03a7f2ac0ff512853564e/ring.erl',
        'https://upload.wikimedia.org/wikipedia/en/a/a9/Example.jpg'
      ];

      file.downloadMultipleFile(urls, './', () => {
        const filePathErl = appRoot.path+'/ring.erl';
        const fileErlExists = fs.existsSync(filePathErl, 'utf8');
        const filePathJpg = appRoot.path+'/Example.jpg';
        const fileJpgExists = fs.existsSync(filePathJpg, 'utf8');
        expect(fileErlExists).to.be.true;
        expect(fileJpgExists).to.be.true;
        fs.unlinkSync(filePathJpg);
        fs.unlinkSync(filePathErl);
        done();
      });
    });
  });
});
