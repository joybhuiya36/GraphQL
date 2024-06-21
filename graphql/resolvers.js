module.exports = {
  signup({ userInput }, req) {
    const name = userInput.name;
    const email = userInput.email;
    const password = userInput.password;
  },
  hello() {
    return {
      text: 'Hello World!',
      views: '25',
    };
  },
};
