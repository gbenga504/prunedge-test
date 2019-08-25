import React from "react";
import withStyles from "@material-ui/core/styles/withStyles";

import { styles } from "./styles";
import SideBar from "../../components/SideBar";
import ProfileDetailsView from "../../components/Profile/ProfileDetailsView";
import EditProfileView from "../../components/Profile/EditProfileView";

class Profile extends React.PureComponent {
  render() {
    let { classes } = this.props;

    return (
      <div className={classes.container}>
        <SideBar />
        <div className={classes.mainProfileContainer}>
          <ProfileDetailsView />
          <EditProfileView />
        </div>
      </div>
    );
  }
}

export default withStyles(styles)(Profile);
