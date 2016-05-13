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
    it('should return a formatted with gist details when inputed a raw gist information', () => {
      if (!String.prototype.format) {
        String.prototype.format = stringpollyfill.format;
      }
      expect(messageMapper.gistBasicDetails(chunk)).to.be.a('string');
    });
  });
});
