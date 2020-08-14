const { default: Axios } = require("axios");

const functions = {
  isNull: () => null,
  checkValue: (x) => x,
  createUser: () => {
    const user = { firstName: "Zorana" };
    user["lastName"] = "Lazarevic";
    return user;
  },
  fetchUser: () =>
  Axios
      .get("https://jsonplaceholder.typicode.com/users/1")
      .then((res) => res.data)
      .catch((err) => "error")
};

module.exports = functions;
