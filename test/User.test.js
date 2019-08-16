import { expect } from "@open-wc/testing";

import { User, Admin } from "../src/User.js";
import { shouldBehaveLikeAUser } from "./helpers.js";

describe("User", () => {
  shouldBehaveLikeAUser(() => {
    return new User("tobi", "holowaychuk");
  });
});

describe("Admin", () => {
  function generateAdmin() {
    return new Admin("tobi", "holowaychuk");
  }
  shouldBehaveLikeAUser(generateAdmin);

  let user;
  beforeEach(() => {
    user = generateAdmin();
  });

  it("should be an .admin", () => {
    expect(user.admin).to.be.true;
  });
});
