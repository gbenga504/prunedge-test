import React from "react";
import { create } from "react-test-renderer";

import ProfileDetailsView from "./index";

describe("ProfileDetailsView", () => {
  it("renders the profile details view", () => {
    const tree = create(<ProfileDetailsView />);
    expect(tree).toMatchSnapshot();
  });
});
