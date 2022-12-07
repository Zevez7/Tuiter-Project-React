/**
 * @file test user list
 */

import { screen, render } from "@testing-library/react";
import { HashRouter } from "react-router-dom";
import Bio from "../../components/profile/bio";
import {
  createProfile,
  deleteProfileByUserId,
  findProfileByUserId,
} from "../../services/profiles-service";
import { deleteUser } from "../../services/users-service";
import { createUser } from "../../services/users-service";
/**
 * Test to render Bio componenet with data from server
 * @param  {string} name of the test
 * @param  {function} function to be called
 */
describe("profile renders asyn", () => {
  const MOCKED_PROFILE = {
    _id: "634079953704de375bfca834",
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
    interest3: "Machine Learning",
    friends: ["634079953704de375bfca834", "634079953704de375bfca834"],
  };

  const MOCKED_USER = {
    username: "Spiderman",
    password: "Smith",
    email: "Spiderman@web.com",
  };

  /**
   * Test to render Bio component with data from server
   * @param  {string} name of the test
   * @param  {function} function to be called
   */
  test("profile render static profile", async () => {
    const createdUser = await createUser(MOCKED_USER);
    const userId = createdUser._id;
    MOCKED_PROFILE["userId"] = userId;
    await createProfile(MOCKED_PROFILE);
    const responseProfile = await findProfileByUserId(userId);

    render(
      <HashRouter>
        <Bio profile={responseProfile} user={createdUser} />
      </HashRouter>
    );
    const linkElementUsername = screen.getByText(/Spiderman/i);
    const linkElementCompany = screen.getByText(/Microsoft/i);
    expect(linkElementUsername).toBeInTheDocument();
    expect(linkElementCompany).toBeInTheDocument();

    await deleteUser(userId);
    await deleteProfileByUserId(userId);
  });
});
