/**
 * @file test user list
 */
import { UserList } from "../components/profile/user-List";
import { screen, render } from "@testing-library/react";
import { HashRouter } from "react-router-dom";
import { findAllUsers } from "../services/users-service";
import axios from "axios";
/**
 * Jest mock axios
 * @param  {string} "axios" function to mock
 */
jest.mock("axios");

const MOCKED_USERS = [
  {
    username: "ellen_ripley",
    password: "lv426",
    email: "repley@weyland.com",
    _id: "123",
  },
  {
    username: "sarah_conor",
    password: "illbeback",
    email: "sarah@bigjeff.com",
    _id: "234",
  },
];
/**
 * Test list render with static user array
 * @param  {string} "userlistrendersstaticuserarray" name of the test
 * @param  {function} function to be called
 */
test("user list renders static user array", () => {
  render(
    <HashRouter>
      <UserList users={MOCKED_USERS} />
    </HashRouter>
  );
  const linkElement = screen.getByText(/ellen_ripley/i);
  expect(linkElement).toBeInTheDocument();
});

// Tested this in the user-list-no-mock.test.js
// test("user list renders async", async () => {
// });

/**
 * Test user list renders with an axios mocked
 * @param  {string} "userlistrendersmocked" name of the test
 * @param  {function} function to be called
 */
test("user list renders mocked", async () => {
  axios.get.mockImplementation(() =>
    Promise.resolve({ data: { users: MOCKED_USERS } })
  );
  const response = await findAllUsers();
  const users = response.users;

  render(
    <HashRouter>
      <UserList users={users} />
    </HashRouter>
  );

  const user = screen.getByText(/ellen_ripley/i);
  expect(user).toBeInTheDocument();
});
