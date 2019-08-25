import React from "react";
import { create } from "react-test-renderer";
import MenuItem from "@material-ui/core/MenuItem";

import Input from "./index";

describe("Input", () => {
  it("renders a text input with no children", () => {
    const tree = create(<Input type="text" />);
    expect(tree).toMatchSnapshot();
  });

  it("renders a select input with 2 items", () => {
    const tree = create(
      <Input
        label="Gender"
        halfInput={true}
        type="text"
        select={true}
        value=""
        name="gender"
        required={true}
      >
        <MenuItem value="male">Male</MenuItem>
        <MenuItem value="female">Female</MenuItem>
      </Input>
    );
    expect(tree).toMatchSnapshot();
  });
});
