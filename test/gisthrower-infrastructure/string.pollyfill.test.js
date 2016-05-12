'use strict';

const chai = require('chai');
const expect = chai.expect;

const stringpollyfill = require('app-root-path').require('src/node_modules/gisthrower-infrastructure/string.pollyfill.js');

describe('String Pollyfill', () => {
  it ('should export an object', () => {
    expect(stringpollyfill).to.be.an('Object');
  });

  describe('Properties', () => {
    it('should contains format closure', () => {
      expect(stringpollyfill).to.have.ownProperty('format').that.is.an('object');
    });
  });

  describe('format', () => {
    it('should return a formatted string \'like this\' when input \'like {0}\' and \'this\'', () => {
      if (!String.prototype.format) {
        String.prototype.format = stringpollyfill.format;
      }
      expect('like {0}'.format('this')).to.equals('like this');
    });
  });
});
