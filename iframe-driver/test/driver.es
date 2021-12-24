import { expect } from 'chai';
import { Driver } from '../src/driver.es';

describe('Driver', function () {
  it('should be a class', function () {
    expect(Driver).to.be.a('function');
  });
});
