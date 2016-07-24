import chai, {expect}       from 'chai';
import dirtyChai            from 'dirty-chai';
import * as fetchTools      from '../../src/app/services/fetchTools';

chai.use(dirtyChai);

describe('fetchTools service', () => {
  describe('checkStatus', () => {
    const response = {status: 200, data: 'response mock'};
    it('should return response', () => {
      expect(fetchTools.checkStatus(response)).to.deep.equal(response);
    });
  });
});
