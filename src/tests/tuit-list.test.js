/**
 * @file test list component with mock axios
 */
import { screen, render } from "@testing-library/react";
import { HashRouter } from "react-router-dom";
import { findAllTuits } from "../services/tuits-service";
import axios from "axios";
import Tuits from "../components/tuits";

/**
 * Mock axios with jest.mock
 * @param  {function} "axios" the function to be mocked
 */
jest.mock("axios");

const MOCKED_USERS = ["alice", "bob", "charlie"];

const MOCKED_TUITS = ["alice's tuit", "bob's tuit", "charlie's tuit"];

const tuitsArray = MOCKED_USERS.map((username, index) => {
  return {
    _id: Math.random() * 100,
    postedBy: { username: username },
    tuit: MOCKED_TUITS[index],
    image: "perseverance.jpg",
    youtube: null,
    avatarLogo: "nasa-logo.jpg",
    published: "Dec 25, 2021",
    imageOverlay: null,
    stats: {
      replies: 123,
      retuits: 234,
      likes: 345,
    },
  };
});

/**
 * Test the tuit component with static mocked data
 * @param  {string} "tuitlistrendersstatictuitarray" name of the test
 * @param  {function} function to be calle by test
 */
test("tuit list renders static tuit array", () => {
  render(
    <HashRouter>
      <Tuits tuits={tuitsArray} />
    </HashRouter>
  );
  const linkElement = screen.getByText(/alice@alice/i);
  expect(linkElement).toBeInTheDocument();
});

// Tested this in the tuit-list-no-mock.test.js
// test("tuit list renders async", async () => {
//   // TODO: implement this
// });

/**
 * Test the tuit list render mock
 * @param  {string} "tuitlistrendersmocked" name of the test
 * @param  {function} async the function that is called
 */
test("tuit list renders mocked", async () => {
  axios.get.mockImplementation(() =>
    Promise.resolve({ data: { tuits: tuitsArray } })
  );

  const response = await findAllTuits();
  const tuits = response.tuits;

  render(
    <HashRouter>
      <Tuits tuits={tuits} />
    </HashRouter>
  );

  const tuit = screen.getByText(/alice@alice/i);
  expect(tuit).toBeInTheDocument();
});
