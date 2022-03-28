const chai = require('chai');
const expect = chai.expect;
const chaiAsPromised = require('chai-as-promised')
chai.use(chaiAsPromised);

describe("Has a characters routes:", function () {
  describe("Check api rest characteer", function () {
    it("there is a GET route that returns all characters", function () {
      return supertest
        .get("/api/characters")
        .expect(200)
        .expect("Content-Type", /json/)
        .expect(function (res) {
          expect(res.body).to.eql([]);
        });
    });
  });
});