/* eslint-disable no-proto */

export function User(first, last) {
  this.name = {
    first,
    last,
  };
}

User.prototype.fullname = function() {
  if (this.admin) {
    return `${this.name.first}_${this.name.last}`;
  }
  return `${this.name.first} ${this.name.last}`;
};

export function Admin(first, last) {
  User.call(this, first, last);
  this.admin = true;
}

Admin.prototype.__proto__ = User.prototype;
