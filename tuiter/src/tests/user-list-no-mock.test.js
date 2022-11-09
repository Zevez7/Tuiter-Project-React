/**
 * @file test for user list without axios mock
 */
import { UserList } from "../components/profile/user-List";
import { screen, render } from "@testing-library/react";
import { HashRouter } from "react-router-dom";
import {
  createUser,
  deleteUsersByUsername,
  findAllUsers,
} from "../services/users-service";

/**
 * Test for list render with no axios mox
 * @param  {string} "userlistrendersasyn" name of the test
 * @param  {function} function to be called for testing
 */
describe("user list renders asyn", () => {
  // sample user to insert
  const nasa = {
    username: "NASA",
    password: "NASA",
    email: "NASA@aliens.com",
  };

  /**
   * Setup before running test
   * @param  {function} function to be called
   */
  beforeAll(() => {
    // remove any/all users to make sure we create it in the test
    return deleteUsersByUsername(nasa.username);
  });

  /**
   * Setup after running test
   * @param  {function} function to be called
   */
  afterAll(() => {
    // remove any data we created
    return deleteUsersByUsername(nasa.username);
  });

  /**
   * Test user list rendering with data from the database
   * @param  {string} "userlistrendersasync" name of the test
   * @param  {function} function to be called
   */
  test("user list renders async", async () => {
    const createNewUser = await createUser(nasa);

    const users = await findAllUsers();
    render(
      <HashRouter>
        <UserList users={users} />
      </HashRouter>
    );
    const linkElement = screen.getByText(/NASA/i);
    expect(linkElement).toBeInTheDocument();
  });
});
