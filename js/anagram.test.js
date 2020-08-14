const isAnagram = require("./anagram");

test("isAnagram function exists", () => {
  expect(typeof isAnagram).toEqual("function");
});

test("'cinema' is an anagram of an 'iceman'", () => {
  expect(isAnagram("cinema", "iceman")).toBeTruthy();
});

test("'Dormitory' is an anagram of an 'dirty room##'", () => {
  expect(isAnagram("Dormitory", "dirty room##")).toBeTruthy();
});

test("'hello' is NOT an anagram of an 'Aloha'", () => {
    expect(isAnagram("hello", "Aloha")).toBeFalsy();
  });
  