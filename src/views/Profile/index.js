import React from "react";
import withStyles from "@material-ui/core/styles/withStyles";

import { styles } from "./styles";
import SideBar from "../../components/SideBar";

class Profile extends React.PureComponent {
  render() {
    let { classes } = this.props;

    return (
      <div className={classes.container}>
        <SideBar />
      </div>
    );
  }
}

export default withStyles(styles)(Profile);
