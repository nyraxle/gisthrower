'use strict';

const chai = require('chai');
const expect = chai.expect;
const stringpollyfill = require('app-root-path').require('src/node_modules/gisthrower-infrastructure/string.pollyfill.js');
const messageMapper = require('app-root-path').require('src/node_modules/gisthrower-infrastructure/message.mapper.js');

const chunk = {
  "id": "testMapper",
  "description": "description of gist",
  "public": true,
  "git_pull_url": "https://gist.github.com/testMapper.git",
  "files": {
    "test.txt": {
      "language": "Plain Text"
    }
  },
  "owner": {
    "login": "TestUser"
  },
  "comments": 0,
  "history": [
    {
      "change_status": {
        "deletions": 0,
        "additions": 180,
        "total": 180
      },
      "committed_at": "2010-04-14T02:15:15Z"
    }
  ]
}

describe('Message Mapper', () => {
  before(function() {
    if (!String.prototype.format) {
      String.prototype.format = stringpollyfill.format;
    }
  });

  it ('should export an object', () => {
    expect(messageMapper).to.be.an('Object');
  });

  describe('Properties', () => {
    it('should contains gistInformations closure', () => {
      expect(messageMapper).to.have.ownProperty('gistInformations').that.is.an('object');
    });
  });

  describe('gistInformations', () => {
    it('should return a formatted string when inputed a raw gist information', () => {
      expect(messageMapper.gistInformations(chunk)).to.be.a('string');
    });
  });

  describe('gistBasicDetails', () => {
    it('should return a formatted string with gist details when inputed a raw gist information', () => {
      expect(messageMapper.gistBasicDetails(chunk)).to.be.a('string');
    });
  });

  describe('gistFileDetails', () => {
    it('should return a formatted string with file details when inputed a file details', () => {
      const file = {
        name: 'file.js',
        size: '120',
        language: 'Javascript'
      };
      expect(messageMapper.gistFileDetails(file)).to.be.a('string');
    });
  });

  describe('gistDetailedInformations', () => {
    it('should return a formatted string with detailed information about inputed gist chunk', () => {
      expect(messageMapper.gistDetailedInformations(chunk)).to.be.a('string');
    });
  });
});
