import React from "react";
import withStyles from "@material-ui/core/styles/withStyles";
import Typography from "@material-ui/core/Typography";
import AccountingIcon from "@material-ui/icons/DeviceHub";
import GroupIcon from "@material-ui/icons/Group";
import EditIcon from "@material-ui/icons/Edit";

import { styles } from "./styles";
import { color } from "../../../Css";

class ProfileDetailsVew extends React.PureComponent {
  state = {
    avatar:
      "https://media.licdn.com/dms/image/C5603AQHnNE6t21CVkg/profile-displayphoto-shrink_100_100/0?e=1571875200&v=beta&t=DOFMyno8Ei2tZmecWIppdRxDcicR43lX-0k2Q7rktaU"
  };

  handleFileChange = e => {
    let file = e.target.files[0],
      fileReader = new FileReader();

    if (file) {
      fileReader.onload = ev => {
        this.setState({
          avatar: ev.target.result
        });
      };
      fileReader.readAsDataURL(file);
    }
  };

  renderPersonalDetails = () => {
    let { classes } = this.props;

    return (
      <div className={classes.personalDetailsContainer}>
        <div className={classes.avatarContainer}>
          <img alt="user" src={this.state.avatar} />
          <div className={classes.uploadContainer}>
            <EditIcon />
            <input type="file" onChange={this.handleFileChange} />
          </div>
        </div>
        <Typography variant="body2" classes={{ body2: classes.userName }}>
          Joahn Samuel
        </Typography>
        <Typography variant="body2" classes={{ body2: classes.role }}>
          Front Desk Officer
        </Typography>
      </div>
    );
  };

  renderOrganizationDetails = () => {
    let { classes } = this.props;

    return (
      <div className={classes.organizationContainer}>
        <div className="profile__organization-single-unit">
          <div
            className={classes.iconContainer}
            style={{ borderColor: color.lightPurple, background: color.purple }}
          >
            <AccountingIcon />
          </div>
          <Typography
            variant="body2"
            classes={{ body2: classes.lightGreyText }}
          >
            Department
          </Typography>
          <Typography variant="body2" classes={{ body2: classes.darkText }}>
            Accounting
          </Typography>
        </div>
        <div className="profile__organization-single-unit">
          <div className={classes.iconContainer}>
            <GroupIcon />
          </div>
          <Typography
            variant="body2"
            classes={{ body2: classes.lightGreyText }}
          >
            Unit
          </Typography>
          <Typography variant="body2" classes={{ body2: classes.darkText }}>
            Finance
          </Typography>
        </div>
        <div className="profile__organization-single-unit">
          <div className={classes.iconContainer}>
            <GroupIcon />
          </div>
          <Typography
            variant="body2"
            classes={{ body2: classes.lightGreyText }}
          >
            Organization
          </Typography>
          <Typography variant="body2" classes={{ body2: classes.darkText }}>
            Prunedge
          </Typography>
        </div>
      </div>
    );
  };

  render() {
    let { classes } = this.props;

    return (
      <div className={classes.container}>
        <div style={{ position: "relative", width: "auto" }}>
          <Typography variant="body1" classes={{ body1: classes.title }}>
            Profile
          </Typography>
          <span className={classes.marker} />
        </div>
        {this.renderPersonalDetails()}
        <div className={classes.separator} />
        {this.renderOrganizationDetails()}
      </div>
    );
  }
}

export default withStyles(styles)(ProfileDetailsVew);
