/**
 * @file test user list
 */

import { screen, render } from "@testing-library/react";
import { HashRouter } from "react-router-dom";
import axios from "axios";
import Bio from "../../components/profile/bio";
import { findProfileByUserId } from "../../services/profiles-service";
import { findUserById } from "../../services/users-service";

/**
 * Jest mock axios
 * @param  {string} "axios" function to mock
 */
jest.mock("axios");

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
  interest3: "Machine Learning12",
  friends: ["634079953704de375bfca834", "634079953704de375bfca834"],
};

const MOCKED_USER = {
  username: "Spiderman",
  password: "Smith",
  email: "Spiderman@web.com",
};
//   {
//     _id: "638ebd67c7aefa0f6ae16df3",
//     userId: "638ebd67c7aefa0f6ae16df1",
//     profileImage:
//       "https://commons.wikimedia.org/wiki/Main_Page#/media/File:Preparing_and_slicing_carrots.jpg",
//     personalWebiste: "www.airbnb.org",
//     linkedIn: "www.linkedIn.com",
//     github: "www.github.com",
//     instagram: "www.instagram.com",
//     company: "Microsoft",
//     interest1: "Sleeping",
//     interest2: "Running",
//     interest3: "Learning",
//     friends: ["634079953704de375bfca834", "634079953704de375bfca834"],
//   },
// ];

/**
 * Test list render with static user array
 * @param  {string} "userlistrendersstaticuserarray" name of the test
 * @param  {function} function to be called
 */

test("profile render static profile", () => {
  render(
    <HashRouter>
      <Bio profile={MOCKED_PROFILE} user={MOCKED_USER} />
    </HashRouter>
  );
  const linkElementUsername = screen.getByText(/Spiderman/i);

  const linkElementCompany = screen.getByText(/Microsoft/i);
  expect(linkElementUsername).toBeInTheDocument();
  expect(linkElementCompany).toBeInTheDocument();
});

/**
 * Test profile with mocked api response
 * @param  {string} name of the test
 * @param  {function} function to be called
 */
test("mocked api response", async () => {
  axios.get.mockImplementation(() =>
    Promise.resolve({ data: { profile: MOCKED_PROFILE, user: MOCKED_USER } })
  );
  const responseProfile = await findProfileByUserId(MOCKED_PROFILE.userId);

  const profile = responseProfile.profile;
  const user = responseProfile.user;

  render(
    <HashRouter>
      <Bio profile={profile} user={user} />
    </HashRouter>
  );

  
});
// Tested this in the user-list-no-mock.test.js
// test("user list renders async", async () => {
// });
