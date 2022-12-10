/**
 * @file Tuiter service test
 */

import {
  createTuit,
  createTuitByUserId,
  findAllTuits,
  findTuitsByUser,
  findTuitById,
  deleteTuit,
  updateTuit,
  deleteTuitByUserId,
} from "../../services/tuits-service";

import {
  createUser,
  deleteUsersByUsername,
} from "../../services/users-service";

/**
 * Test to create tuit
 * @param  {string}  name of the test
 * @param  {function} function to be called for testing
 */
describe("can create tuit with REST API", () => {
  // sample tuit to insert
  const newTuits = {
    tuit: "tuiter testing",
    postedBy: "6394feff14b91bfd508745f1",
  };

  /**
   * Setup before running test
   * @param  {function} function to be called
   */
  beforeAll(() => {
    // remove any/all users to make sure we create it in the test
    return deleteTuitByUserId(newTuits.postedBy);
  });

  /**
   * Setup after running test
   * @param  {function} function to be called
   */
  afterAll(() => {
    // remove any data we created
    return deleteTuitByUserId(newTuits.postedBy);
  });
  /**
   * Test to insert new user
   * @param  {string} "caninsertnewuserswithRESTAPI" name of the test
   * @param  {function} function the function to be called for testing
   */
  test("can insert new users with REST API", async () => {
    // insert new user in the database
    const createdTuit = await createTuit(newTuits);
    // verify inserted user's properties match parameter user
    expect(createdTuit.tuit).toEqual(newTuits.tuit);
    expect(createdTuit.postedBy).toEqual(newTuits.postedBy);
  });
});

/**
 * Test tuit delete
 * @param  {string} "candeletetuitwithRESTAPI" name of the test
 * @param  {function} function to be called for testing
 */
describe("can delete tuit with REST API", () => {
  // sample tuit to insert
  const newTuits = {
    tuit: "tuiter service testing",
    postedBy: "6394feff14b91bfd508745f1",
  };
  /**
   * Setup before running test
   * @param  {function} function to be called
   */
  beforeAll(() => {
    // remove any/all users to make sure we create it in the test
    return deleteTuitByUserId(newTuits.postedBy);
  });

  /**
   * Setup after running test
   * @param  {function} function to be called
   */
  afterAll(() => {
    // remove any data we created
    return deleteTuitByUserId(newTuits.postedBy);
  });

  /**
   * Test to delete tuit
   * @param  {string} "candeletetuitwithRESTAPI"
   * @param  {function} function function to be called for testing
   */
  test("can delete tuit with REST API", async () => {
    await createTuit(newTuits);
    // delete a tuit by their user id. Assumes tuit already exists
    const status = await deleteTuitByUserId(newTuits.postedBy);
    // verify we deleted at least one user by their username
    expect(status.deletedCount).toBeGreaterThanOrEqual(1);
  });
});

/**
 * Test to find tuit by tuit id
 * @param  {string} "canretrieveatuitbytheirprimarykeywithRESTAPI" name of the test
 * @param  {function} function to be called for testing

 */
describe("can retrieve a tuit by their primary key with REST API", () => {
  // sample tuit to insert
  const newTuits = {
    tuit: "tuiter testing",
    postedBy: "63577431cd4eab25f6a5660f",
  };
  /**
   * Setup before running test
   * @param  {function} function to be called
   */
  beforeAll(() => {
    // remove any/all tuit to make sure we create it in the test
    return deleteTuitByUserId(newTuits.postedBy);
  });
  /**
   * Setup after running test
   * @param  {function} function to be called
   */
  afterAll(() => {
    // remove any data we created
    return deleteTuitByUserId(newTuits.postedBy);
  });
  /**
   * Test to find the tuit by its primary key
   * @param  {string} "canretrieveatuitbytheirprimarykeywithRESTAPI" name of the test
   * @param  {function} function to be called for the testing
   */
  test("can retrieve a tuit by their primary key with REST API", async () => {
    // insert new tuit in the database
    const createdTuit = await createTuit(newTuits);

    // verify inserted tuit's properties match parameter Tuit
    expect(createdTuit.tuit).toEqual(newTuits.tuit);
    expect(createdTuit.postedBy).toEqual(newTuits.postedBy);

    // retrieve the tuit from the database by its primary key
    const existingTuit = await findTuitById(createdTuit._id);

    // verify retrieved tuit matches parameter tuit
    expect(existingTuit.tuit).toEqual(newTuits.tuit);
    expect(existingTuit.postedBy).toEqual(newTuits.postedBy);
  });
});
/**
 * Test to find all tuits
 * @param  {string} "canretrievealltuitswithRESTAPI" name of the test
 * @param  {function} function to be called for testing
 */
describe("can retrieve all tuits with REST API", () => {
  // sample users we'll insert to then retrieve
  const ripley = {
    username: "ellenripley",
    password: "lv426",
    email: "ellenripley@aliens.com",
  };
  let newUser;
  newUser = createUser(ripley);

  const tuits = [
    { tuit: "tuiter testing 1", postedBy: newUser._Id },
    { tuit: "tuiter testing 2", postedBy: newUser._Id },
    { tuit: "tuiter testing 3", postedBy: newUser._Id },
  ];

  const tuitsIndex = [
    "tuiter testing 1",
    "tuiter testing 2",
    "tuiter testing 3",
  ];

  let tuit1;
  let tuit2;
  let tuit3;

  /**
   * Setup before running test
   * @param  {function} function to be called
   */
  beforeAll(async () =>
    // insert several known tuit
    {}
  );
  /**
   * Setup after running test
   * @param  {function} function to be called
   */
  afterAll(async () => {
    // delete the tuits we inserted
    await deleteTuit(tuit1._id);
    await deleteTuit(tuit2._id);
    await deleteTuit(tuit3._id);
    await deleteUsersByUsername(ripley.username);
  });
  /**
   * Test to find all users from the database
   * @param  {string} "canretrieveallusersfromRESTAPI" name of the test
   * @param  {function} function to be called for testing
   */
  test("can retrieve all users from REST API", async () => {
    tuit1 = await createTuit(tuits[0]);
    tuit2 = await createTuit(tuits[1]);
    tuit3 = await createTuit(tuits[2]);
    // retrieve all the tuits
    const allTuits = await findAllTuits();

    // there should be a minimum number of tuits
    expect(allTuits.length).toBeGreaterThanOrEqual(tuits.length);

    // let's check each tuit we inserted
    const allTuitsWeInserted = allTuits.filter(
      (tuit) => tuitsIndex.indexOf(tuit.tuit) >= 0
    );

    // compare the actual tuit in database with the ones we sent
    allTuitsWeInserted.forEach((tuitFound) => {
      const tuitAdded = tuits.find((tuit) => tuit.tuit === tuitFound.tuit);

      expect(tuitFound.tuit).toEqual(tuitAdded.tuit);
    });
  });
});
