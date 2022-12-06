/**
 * @file User Test
 */
import {
  createUser,
  deleteUsersByUsername,
  findAllUsers,
  findUserById,
} from "../../services/users-service";

import {
  createProfile,
  deleteProfileByUserId,
  findProfileByUserId,
  updateProfileByUserId,
} from "../../services/profiles-service";
/**
 * Test create profile
 * @param  {string} "createProfile" name of the test
 * @param  {function} function to be called
 * */
describe("test createProfile", () => {
  const ripley = {
    userId: "6359de6091bbeb778a1bd617",
    profileImage:
      "www.wikipedia.org/portal/wikipedia.org/assets/img/Wikipedia-logo-v2@2x.png",
    personalWebiste: "www.wikipedia.org",
    linkedIn: "www.linkedIn.com",
    github: "www.github.com",
    instagram: "www.instagram.com",
    company: "Microsoft",
    interest1: "Software Developer",
    interest2: "Healthcare",
    interest3: "Machine Learning12",
    friends: ["634079953704de375bfca834", "634079953704de375bfca834"],
  };

  /**
   * Setup before running test
   * @param  {function} function to be called
   */
  beforeAll(() => {
    // remove any/all users to make sure we create it in the test
    return deleteProfileByUserId(ripley.userId);
  });

  /**
   * Setup after running test
   * @param  {function} function to be called
   */
  afterAll(() => {
    // remove any data we created
    return deleteProfileByUserId(ripley.userId);
  });

  /**
   * Test creating a profile
   * @param  {string} name of the test
   * @param  {function} function to be called
   */
  test("create profile testing", async () => {
    // insert new user in the database
    const createdProfile = await createProfile(ripley);

    // verify inserted user's properties match parameter user
    expect(createdProfile.userId).toEqual(ripley.userId);
    expect(createdProfile.interest1).toEqual(ripley.interest1);
    expect(createdProfile.interest2).toEqual(ripley.interest2);
  });

  /**
   * Test deleting a profile
   * @param  {string} name of the test
   * @param  {function} function to be called
   */
  test("delete profile test", async () => {
    // insert new user in the database
    const createdProfile = await createProfile(ripley);

    const result = await deleteProfileByUserId(ripley.userId);

    // verify inserted user's properties match parameter user
    expect(result.deletedCount).toEqual(1);
  });

  /**
   * Test updating a profile
   * @param  {string} name of the test
   * @param  {function} function to be called
   */
  test("find profile by user Id", async () => {
    // insert new user in the database
    const createdProfile = await createProfile(ripley);

    const profileFound = await findProfileByUserId(ripley.userId);

    expect(createdProfile.interest1).toEqual(profileFound.interest1);
    expect(createdProfile.interest2).toEqual(profileFound.interest2);
    expect(createdProfile.interest3).toEqual(profileFound.interest3);

    //Clean up
    deleteProfileByUserId(ripley.userId);
  });

  /**
   * Test updating a profile
   * @param  {string} name of the test
   * @param  {function} function to be called
   */
  test("update profile test", async () => {
    // insert new user in the database
    const createdProfile = await createProfile(ripley);

    const updatedInterest = {
      userId: "6359de6091bbeb778a1bd617",
      profileImage:
        "www.wikipedia.org/portal/wikipedia.org/assets/img/Wikipedia-logo-v2@2x.png",
      linkedIn: "www.linkedIn.com",
      github: "www.github.com",
      instagram: "www.instagram.com",
      company: "Microsoft",
      interest1: "Sleeping",
      interest2: "Working",
      interest3: "Traveling",
      friends: ["634079953704de375bfca834", "634079953704de375bfca834"],
    };
    const result = await updateProfileByUserId(
      createdProfile.userId,
      updatedInterest
    );

    const profileFound = await findProfileByUserId(ripley.userId);

    expect(profileFound.interest1).toEqual(updatedInterest.interest1);
    expect(profileFound.interest2).toEqual(updatedInterest.interest2);
    expect(profileFound.interest3).toEqual(updatedInterest.interest3);

    //Clean up
    deleteProfileByUserId(ripley.userId);
  });
});
