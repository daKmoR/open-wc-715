import { expect } from '@open-wc/testing';

export function shouldBehaveLikeAUser(generateUser, { first, last, fullname }) {
  let user;
  beforeEach(() => {
    user = generateUser();
  });

  it('should have .name.first', () => {
    expect(user.name.first).to.equal(first);
  });

  it('should have .name.last', () => {
    expect(user.name.last).to.equal(last);
  });

  describe('.fullname()', () => {
    it('should return the full name', () => {
      expect(user.fullname()).to.equal(fullname);
    });
  });
}
