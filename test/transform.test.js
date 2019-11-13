/* eslint-disable no-unused-expressions */

const { expect } = require("chai");
const { messages } = require("elasticio-node");
const { mailingToOih } = require("./seed/mailing");
const transformMailingToOih = require("../lib/actions/transformMailingToOih");

describe("Transformation test", () => {
  it("should handle simple mailing tranformation in direction to OIH", () => {
    const exp = mailingToOih();
    return transformMailingToOih
      .process(messages.newMessageWithBody(exp))
      .then(result => {
        expect(result.body).to.be.an("object");
        expect(result.body.data.firstName).to.be.equal("Mark");
        expect(result.body.data.lastName).to.be.equal("Smith");
      });
  });

  it("should produce an empty message if transformation returns undefined", () =>
    transformMailingToOih
      .process(messages.newMessageWithBody({}))
      .then(result => {
        expect(result).to.be.undefined;
      }));
});
