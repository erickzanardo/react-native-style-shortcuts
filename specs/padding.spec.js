const { expect } = require("chai");
const { padding } = require("../index");

describe("#padding", () => {
  context("when passing one argument", () =>
    it("returns the correct object", () =>
      expect(padding(1)).to.deep.equal({
        paddingTop: 1,
        paddingBottom: 1,
        paddingLeft: 1,
        paddingRight: 1,
      })
    )
  );

  context("when passing two arguments", () =>
    it("returns the correct object", () =>
      expect(padding(1, "50%")).to.deep.equal({
        paddingTop: 1,
        paddingBottom: 1,
        paddingLeft: "50%",
        paddingRight: "50%",
      })
    )
  );

  context("when passing three arguments", () =>
    it("returns the correct object", () =>
      expect(padding(1, "50%", "auto")).to.deep.equal({
        paddingTop: 1,
        paddingBottom: "auto",
        paddingLeft: "50%",
        paddingRight: "50%",
      })
    )
  );

  context("when passing four arguments", () =>
    it("returns the correct object", () =>
      expect(padding(1, "50%", "auto", 3)).to.deep.equal({
        paddingTop: 1,
        paddingBottom: "auto",
        paddingLeft: 3,
        paddingRight: "50%",
      })
    )
  );

  context("when passing more than four arguments", () =>
    it("returns null", () => expect(padding(1, 2, 3, 4, 5)).to.be.null)
  );

  context("when passing no arguments", () =>
    it("returns null", () => expect(padding()).to.be.null)
  );
});
