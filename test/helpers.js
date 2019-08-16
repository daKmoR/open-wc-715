import { expect } from "@open-wc/testing";

export function shouldBehaveLikeAUser(generateUser) {
  let user;
  beforeEach(() => {
    user = generateUser();
  });

  it("should have .name.first", () => {
    expect(user.name.first).to.equal("tobi");
  });

  it("should have .name.last", () => {
    expect(user.name.last).to.equal("holowaychuk");
  });

  describe(".fullname()", () => {
    it("should return the full name", () => {
      expect(user.fullname()).to.equal("tobi holowaychuk");
    });
  });
}
