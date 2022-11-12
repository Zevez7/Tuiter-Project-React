/**
 * @file User Test
 */
import {
  createUser,
  deleteUsersByUsername,
  findAllUsers,
  findUserById,
} from "../services/users-service";
/**
 * Test create user
 * @param  {string} "createUser" name of the test
 * @param  {function} function to be called
 * */
describe("createUser", () => {
  // sample user to insert
  const ripley = {
    username: "ellenripley",
    password: "lv426",
    email: "ellenripley@aliens.com",
  };

  /**
   * Setup before running test
   * @param  {function} function to be called
   */
  beforeAll(() => {
    // remove any/all users to make sure we create it in the test
    return deleteUsersByUsername(ripley.username);
  });

  /**
   * Setup after running test
   * @param  {function} function to be called
   */
  afterAll(() => {
    // remove any data we created
    return deleteUsersByUsername(ripley.username);
  });

  /**
   * Test creating a new user with rest api
   * @param  {string} "caninsertnewuserswithRESTAPI" name of the test
   * @param  {function} function to be called
   */
  test("can insert new users with REST API", async () => {
    // insert new user in the database
    const newUser = await createUser(ripley);

    // verify inserted user's properties match parameter user
    expect(newUser.username).toEqual(ripley.username);
    expect(newUser.password).toEqual(ripley.password);
    expect(newUser.email).toEqual(ripley.email);
  });
});

/**
 * Test delete user by user name
 * @param  {string} "deleteUsersByUsername" name of the test
 * @param  {function} function to be called
 */
describe("deleteUsersByUsername", () => {
  // sample user to delete
  const sowell = {
    username: "thommas_sowell",
    password: "compromise",
    email: "compromise@solutions.com",
  };

  /**
   * Setup before running test
   * @param  {function} function to be called
   */
  beforeAll(() => {
    // insert the sample user we then try to remove
    return createUser(sowell);
  });

  /**
   * Setup after running test
   * @param  {function} function to be called
   */
  afterAll(() => {
    // remove any data we created
    return deleteUsersByUsername(sowell.username);
  });

  /**
   * Test can delete user from REST API by username
   * @param  {string} "candeleteusersfromRESTAPIbyusername" name of the test
   * @param  {function} function to be called
   */
  test("can delete users from REST API by username", async () => {
    // delete a user by their username. Assumes user already exists
    const status = await deleteUsersByUsername(sowell.username);

    // verify we deleted at least one user by their username
    expect(status.deletedCount).toBeGreaterThanOrEqual(1);
  });
});

/**
 * Test find user by id
 * @param  {string} "findUserById" find user by id
 * @param  {function} function to be called
 */
describe("findUserById", () => {
  // sample user we want to retrieve
  const adam = {
    username: "adam_smith",
    password: "not0sum",
    email: "wealth@nations.com",
  };

  /**
   * Setup before running test
   * @param  {function} function to be called
   */
  beforeAll(() => {
    // clean up before the test making sure the user doesn't already exist
    return deleteUsersByUsername(adam.username);
  });

  /**
   * Setup after running test
   * @param  {function} function to be called
   */
  afterAll(() => {
    // remove any data we inserted
    return deleteUsersByUsername(adam.username);
  });

  /**
   * Test to find user by user id
   * @param  {string}"canretrieveuserfromRESTAPIbyprimarykey" name of the test
   * @param  {function} function to be called
   */
  test("can retrieve user from REST API by primary key", async () => {
    // insert the user in the database
    const newUser = await createUser(adam);

    // verify new user matches the parameter user
    expect(newUser.username).toEqual(adam.username);
    expect(newUser.password).toEqual(adam.password);
    expect(newUser.email).toEqual(adam.email);

    // retrieve the user from the database by its primary key
    const existingUser = await findUserById(newUser._id);

    // verify retrieved user matches parameter user
    expect(existingUser.username).toEqual(adam.username);
    expect(existingUser.password).toEqual(adam.password);
    expect(existingUser.email).toEqual(adam.email);
  });
});
/**
 * test find all user
 * @param  {string} "findAllUsers" name of the test
 * @param  {function} function to be called
 */
describe("findAllUsers", () => {
  // sample users we'll insert to then retrieve
  const usernames = ["larry", "curley", "moe"];

  /**
   * Setup before running test
   * @param  {function} function to be called
   */
  beforeAll(() =>
    // insert several known users
    {
      createUser({
        username: "larry",
        password: `larry123`,
        email: `larry@stooges.com`,
      });
      createUser({
        username: "curley",
        password: `curley123`,
        email: `curley@stooges.com`,
      });

      return createUser({
        username: "moe",
        password: `moe123`,
        email: `moe@stooges.com`,
      });
    }
  );

  /**
   * Setup after running test
   * @param  {function} function to be called
   */
  afterAll(() =>
    // delete the users we inserted
    {
      deleteUsersByUsername("larry");
      deleteUsersByUsername("curley");
      return deleteUsersByUsername("moe");
    }
  );
  /**
   * Test to find all user
   * @param  {string} "canretrieveallusersfromRESTAPI" name of the test
   * @param  {function} function to be called
   */
  test("can retrieve all users from REST API", async () => {
    // retrieve all the users
    const users = await findAllUsers();

    // console.log(users);
    // there should be a minimum number of users
    expect(users.length).toBeGreaterThanOrEqual(usernames.length);

    // let's check each user we inserted
    const usersWeInserted = users.filter(
      (user) => usernames.indexOf(user.username) >= 0
    );

    // compare the actual users in database with the ones we sent
    usersWeInserted.forEach((user) => {
      const username = usernames.find((username) => username === user.username);
      expect(user.username).toEqual(username);
      expect(user.password).toEqual(`${username}123`);
      expect(user.email).toEqual(`${username}@stooges.com`);
    });
  });
});
