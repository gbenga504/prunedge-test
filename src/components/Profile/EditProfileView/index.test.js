import React from "react";
import { create } from "react-test-renderer";

import EditProfileView from "./index";

const createNodeMock = el => {
  if (el.type === "textarea") {
    const mockEl = document.createElement("textarea");
    mockEl.style.padding = "0";
    return mockEl;
  }
  return null;
};

describe("EditProfileView", () => {
  it("renders the edit profile view", () => {
    const tree = create(<EditProfileView />, { createNodeMock });
    expect(tree).toMatchSnapshot();
  });
});
