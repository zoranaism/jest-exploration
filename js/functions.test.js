const functions = require("./functions");

// beforeEach(() => initDatabase());
// afterEach(() => closeDatabase());

// beforeAll(() => initDatabase());
// afterAll(() => closeDatabase());

// const initDatabase = () => console.log("Database initialized");
// const closeDatabase = () => console.log("Database Closed");

const nameCheck = () => console.log("Checking Name...");

describe("Checking names", () => {
  beforeEach(() => nameCheck());

  test("User is Jeff", () => {
    const user = "Jeff";
    expect(user).toBe("Jeff");
  });

  test("User is Karen", () => {
    const user = "Karen";
    expect(user).toBe("Karen");
  });
});

// To be Null
test("Should be null.", () => {
  expect(functions.isNull()).toBeNull();
});

// To Be Falsy
test("Should be falsy.", () => {
  expect(functions.checkValue(null)).toBeFalsy();
});

// To Be Falsy
test("User should be Zorana Lazarevic Object.", () => {
  expect(functions.createUser()).toEqual({
    firstName: "Zorana",
    lastName: "Lazarevic",
  });
});

// ToBe IS FOR THE PRIMITIVE TYPES

// Less than and greater than
test("Should be under 1600", () => {
  const load1 = 800;
  const load2 = 800;
  expect(load1 + load2).toBeLessThanOrEqual(1600);
});

// Regex - regular expressions
// /I/ - case sensitive
// /I/i - case insensitive
test("There is no I in team", () => {
  expect("iteami").not.toMatch(/I/);
});

// Arrays
test("Admin shouold be in usernames", () => {
  usernames = ["John", "Karen", "admin"];
  expect(usernames).toContain("admin");
});

// wprking with async data

// promise
// test("User fetched name should be Leanne Graham", () => {
//   // expect.assertions(1); // when working with async, we need assertions, it verifies that a certain number of assertions is called
//   return functions
//     .fetchUser() // text will complete before the fetch, thats why we need a return
//     .then((data) => {
//       expect(data.name).toEqual("Leanne Graham");
//     });
// });

// async await
test("User fetched name should be Leanne Graham", async () => {
  // expect.assertions(1); // when working with async, we need assertions, it verifies that a certain number of assertions is called
  const data = await functions.fetchUser(); // text will complete before the fetch, thats why we need a return
  expect(data.name).toEqual("Leanne Graham");
});
