const { expect } = require("chai");
const { margin } = require("../index");

describe("#margin", () => {
  context("when passing one argument", () =>
    it("returns the correct object", () =>
      expect(margin(1)).to.deep.equal({
        marginTop: 1,
        marginBottom: 1,
        marginLeft: 1,
        marginRight: 1,
      })
    )
  );

  context("when passing two arguments", () =>
    it("returns the correct object", () =>
      expect(margin(1, "50%")).to.deep.equal({
        marginTop: 1,
        marginBottom: 1,
        marginLeft: "50%",
        marginRight: "50%",
      })
    )
  );

  context("when passing three arguments", () =>
    it("returns the correct object", () =>
      expect(margin(1, "50%", "auto")).to.deep.equal({
        marginTop: 1,
        marginBottom: "auto",
        marginLeft: "50%",
        marginRight: "50%",
      })
    )
  );

  context("when passing four arguments", () =>
    it("returns the correct object", () =>
      expect(margin(1, "50%", "auto", 3)).to.deep.equal({
        marginTop: 1,
        marginBottom: "auto",
        marginLeft: 3,
        marginRight: "50%",
      })
    )
  );

  context("when passing more than four arguments", () =>
    it("returns null", () => expect(margin(1, 2, 3, 4, 5)).to.be.null)
  );

  context("when passing no arguments", () =>
    it("returns null", () => expect(margin()).to.be.null)
  );
});
