const fs = require("fs");
const FileIO = require("../writeToFile");
const card = `<p>test</p>`;
const filename = "test";

jest.mock("fs");

describe("FileIO", () => {
  describe("write", () => {
    it("should call fs.writeFileSync with the passed in 'path' and 'data' arguments", () => {
      const fileIO = new FileIO.write2file(filename, card);

      expect(fs.writeFileSync(filename, card));
    });
  });
});
 