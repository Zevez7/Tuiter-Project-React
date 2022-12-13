/**
 * @file test user list
 */

import { render, screen, fireEvent } from "@testing-library/react";
import { HashRouter } from "react-router-dom";
import EditProfileForm from "../../components/profile/editProfileForm";

/**
 * Test to render Bio componenet with data from server
 * @param  {string} name of the test
 * @param  {function} function to be called
 */
const MOCKED_PROFILE = {
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
  firstName: "Joe",
};

const MOCKED_USER = {
  username: "Spiderman",
  password: "Smith",
  email: "Spiderman@web.com",
};

describe("profile edit page testing", () => {
  /**
   * Test to render Bio component with data from server
   * @param  {string} name of the test
   * @param  {function} function to be called
   */
  test("profile render static edit profile", async () => {
    render(
      <HashRouter>
        <EditProfileForm
          profileResp={MOCKED_PROFILE}
          authprofile={MOCKED_USER}
        />{" "}
      </HashRouter>
    );

    fireEvent.input(screen.getByLabelText("First Name"), {
      target: {
        value: "new",
      },
    });

    expect(screen.getByLabelText("First Name").value).toBe("new");

    fireEvent.input(screen.getByLabelText("LinkedIn"), {
      target: {
        value: "www.LinkedIn.com",
      },
    });

    expect(screen.getByLabelText("LinkedIn").value).toBe("www.LinkedIn.com");

    fireEvent.input(screen.getByLabelText("Github"), {
      target: {
        value: "www.github.com",
      },
    });
    expect(screen.getByLabelText("Github").value).toBe("www.github.com");
  });
});
