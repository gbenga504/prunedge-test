import React from "react";
import { create } from "react-test-renderer";

import ProfileView from "./index";

const createNodeMock = el => {
  if (el.type === "textarea") {
    const mockEl = document.createElement("textarea");
    mockEl.style.padding = "0";
    return mockEl;
  }
  return null;
};

describe("Profile", () => {
  it("renders the profile view", () => {
    const tree = create(<ProfileView />, { createNodeMock });
    expect(tree).toMatchSnapshot();
  });
});
