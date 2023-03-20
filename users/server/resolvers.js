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
      const userNotFound = {
        id: 323,
        userName: "Not Found",
        firstName: "Not Found",
        lastName: "Not Found",
        favNumber: -1,
        isActive: false,
      };
      const user = users.find((u) => u.id == id);
      if (user) {
        return user;
      } else {
        return userNotFound;
      }
    },
  },
};
