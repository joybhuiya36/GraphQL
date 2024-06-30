const authModel = require('../modal/authModal');
const userModel = require('../modal/userModal');
const bcrypt = require('bcrypt');

module.exports = {
  async signup({ userInput }, req) {
    console.log(userInput);
    try {
      console.log(userInput?.address);
      const name = userInput.name;
      const email = userInput.email;
      const password = userInput.password;
      const phone = userInput.phone;
      const address = userInput?.address;

      const finder = await userModel.findOne({ email: email });
      if (finder) {
        return { message: 'User Already Exists' };
      }
      const userData = await userModel.create({ name, email, phone, address });

      const hashedPassword = await bcrypt.hash(password, 10).then((hash) => {
        return hash;
      });
      const authData = await authModel.create({
        email: email,
        password: hashedPassword,
        user: userData._id,
      });
      if (!authData) return { message: 'Failed to Create User' };
      return { message: 'User is created successfully' };
    } catch (err) {
      console.log(err);
      return { message: 'Internal Server Error' };
    }
  },
  async getUsers() {
    try {
      const users = await userModel.find({});
      if (users && users.length > 0) {
        return {
          message: 'All users data is fetched',
          result: users,
        };
      }
      return { message: 'No user found' };
    } catch (err) {
      return { message: 'Internal Server Error' };
    }
  },
};
