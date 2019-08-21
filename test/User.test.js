import { expect } from '@open-wc/testing';

import { User, Admin } from '../src/User.js';
import { shouldBehaveLikeAUser } from './helpers.js';

describe('User', () => {
  shouldBehaveLikeAUser(() => new User('tobi', 'holowaychuk'), {
    first: 'tobi',
    last: 'holowaychuk',
    fullname: 'tobi holowaychuk',
  });

  shouldBehaveLikeAUser(() => new User('peter', 'holowaychuk'), {
    first: 'peter',
    last: 'holowaychuk',
    fullname: 'Dr. peter holowaychuk',
  });
});

describe('Admin', () => {
  function generateAdmin() {
    return new Admin('tobi', 'holowaychuk');
  }

  shouldBehaveLikeAUser(generateAdmin, {
    first: 'tobi',
    last: 'holowaychuk',
    fullname: 'tobi holowaychuk',
  });

  let user;
  beforeEach(() => {
    user = generateAdmin();
  });

  it('should be an .admin', () => {
    expect(user.admin).to.be.true;
  });
});
