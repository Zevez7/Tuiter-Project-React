/**
 * @file Test tuit list without mocking
 */
import { screen, render } from "@testing-library/react";
import { HashRouter } from "react-router-dom";
import {
  createTuit,
  deleteTuit,
  findAllTuits,
} from "../services/tuits-service";
import axios from "axios";
import Tuits from "../components/tuits";
import { UserList } from "../components/profile/user-List";
import { deleteUsersByUsername } from "../services/users-service";

/**
 * Test to render tuit list with tuit data from the database
 * No axios mocking
 */
describe("tuit list renders async", () => {
  // sample user to insert
  const nasa = {
    tuit: "nasatuits",
    postedBy: "63577431cd4eab25f6a5660f",
  };

  /**
   * Setup before running test
   * @param  {function} function to be called
   */
  beforeAll(() => {
    // remove any/all tuit to make sure we create it in the test

    return deleteTuit(nasa.postedBy);
  });

  /**
   * Setup after running test
   * @param  {function} function to be called
   */
  afterAll(() => {
    // remove any data created
    return deleteTuit(nasa.postedBy);
  });
  /**
   * Test user list render async
   * @param  {string} "userlistrendersasync" description of the test
   * @param  {function} async the function called to run the test
   */
  test("user list renders async", async () => {
    const createNasaTuit = await createTuit(nasa);

    const allTuits = await findAllTuits();

    render(
      <HashRouter>
        <Tuits tuits={allTuits} />
      </HashRouter>
    );
    const linkElement = screen.getByText(/nasatuits/i);
    expect(linkElement).toBeInTheDocument();
  });
});
