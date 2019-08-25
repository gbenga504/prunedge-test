import React from "react";
import { create } from "react-test-renderer";

import SideBar from "./index";

describe("SideBar", () => {
  it("renders the sidebar", () => {
    const tree = create(<SideBar />);
    expect(tree).toMatchSnapshot();
  });
});
