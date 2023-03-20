const userNotFound = {
  id: -1,
  userName: "Not Found",
  firstName: "Not Found",
  lastName: "Not Found",
  favNumber: -1,
  isActive: false,
};

module.exports = {
  Query: {
    doesItWork: () => true,
    // The "parent" argument is the result of the previous resolver, if there is any.
    // The "args" argument is an object containing any arguments passed to the query
    // the "models" argument is an object containing any (external) services or models that the resolver needs to perform its task, such as a database or an authentication service.
    getAllUsers: (parent, args, models) => {
      const { users } = models;
      console.log(users);
      return users;
    },
    getUser: (parent, args, models) => {
      const { users } = models;
      const { id } = args;
      const user = users.find((u) => u.id == id);
      if (user) {
        return user;
      } else {
        return userNotFound;
      }
    },
  },
  Mutation: {
    addUser: (parent, args, models) => {
      const { users } = models;
      const { id, userName, firstName, lastName, favNumber, isActive } = args;
      const newUser = {
        id: Number(id),
        userName,
        firstName,
        lastName,
        favNumber,
        isActive,
      };
      users.push(newUser);
      return true;
    },
    removeUser: (parent, args, models) => {
      const { users } = models;
      const { id } = args;
      const index = users.findIndex((u) => u.id === Number(id));
      if (index > -1) {
        users.splice(index, 1);
        return true;
      } else {
        return false;
      }
    },
    editUser: (parent, args, models) => {
      const { users } = models;
      const { id, userName, firstName, lastName, favNumber, isActive } = args;
      const index = users.findIndex((u) => u.id === Number(id));
      if (index > -1) {
        const user = users[index];
        user.userName = userName || user.userName;
        user.firstName = firstName || user.firstName;
        user.lastName = lastName || user.lastName;
        user.favNumber = favNumber || user.favNumber;
        user.isActive = isActive || user.isActive;
        return user;
      } else {
        return userNotFound;
      }
    },
  },
};
