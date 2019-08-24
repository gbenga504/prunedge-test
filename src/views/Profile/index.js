import React from "react";
import withStyles from "@material-ui/core/styles/withStyles";

import { styles } from "./styles";
import SideBar from "../../components/SideBar";
import ProfileDetailsView from "../../components/Profile/ProfileDetailsView";

class Profile extends React.PureComponent {
  render() {
    let { classes } = this.props;

    return (
      <div className={classes.container}>
        <SideBar />
        <div className={classes.mainProfileContainer}>
          <ProfileDetailsView />
        </div>
      </div>
    );
  }
}

export default withStyles(styles)(Profile);
