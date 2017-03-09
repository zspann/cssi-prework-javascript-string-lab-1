'use strict';

describe("encode", function() {
      it("converts leet to l33t", function() {
        expect(encode("leet")).toEqual("l33t");
      });

      it("converts 'hello World' to 'h3ll0$w0rld'", function() {
        expect(encode("hello World")).toEqual("h3ll0$w0rld");
      });

      it("converts 'Aha!' to '4h4!'", function() {
        expect(encode("Aha!")).toEqual("4h4!");
      });
});
