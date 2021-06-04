const { expect } = require('chai');
const useless = require("../useless");

describe("useless function", function() {
  it("Should reject non-string inputs", () => {
    expect(useless.bind(useless, 3)).to.throw();
    expect(useless.bind(useless, "memes")).to.not.throw();
  });

  it("Should return a string", () => {
    expect(useless("whatever")).to.be.an("string");
  });

  it("Should return mapped emojis", () => {
    expect(useless("why")).to.equal("🤙🏻👾👯‍♀️") ;
  });

})