const { expect } = require("chai");
const { borderRadius } = require("../index");

describe("#borderRadius", () => {
  context("when passing one argument", () =>
    it("returns the correct object", () =>
      expect(borderRadius(1)).to.deep.equal({
        borderTopLeftRadius: 1,
        borderTopRightRadius: 1,
        borderBottomLeftRadius: 1,
        borderBottomRightRadius: 1,
      })
    )
  );

  context("when passing two arguments", () =>
    it("returns the correct object", () =>
      expect(borderRadius(1, "50%")).to.deep.equal({
        borderTopLeftRadius: 1,
        borderBottomRightRadius: 1,

        borderTopRightRadius: "50%",
        borderBottomLeftRadius: "50%",
      })
    )
  );

  context("when passing three arguments", () =>
    it("returns the correct object", () =>
      expect(borderRadius(1, "50%", "auto")).to.deep.equal({
        borderTopLeftRadius: 1,
        borderTopRightRadius: "50%",
        borderBottomLeftRadius: "50%",
        borderBottomRightRadius: "auto",
      })
    )
  );

  context("when passing four arguments", () =>
    it("returns the correct object", () =>
      expect(borderRadius(1, "50%", "auto", 3)).to.deep.equal({
        borderTopLeftRadius: 1,
        borderTopRightRadius: "50%",
        borderBottomRightRadius: "auto",
        borderBottomLeftRadius: 3,
      })
    )
  );

  context("when passing more than four arguments", () =>
    it("returns null", () => expect(borderRadius(1, 2, 3, 4, 5)).to.be.null)
  );

  context("when passing no arguments", () =>
    it("returns null", () => expect(borderRadius()).to.be.null)
  );
});
