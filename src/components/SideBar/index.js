import React from "react";
import withStyles from "@material-ui/core/styles/withStyles";
import Typography from "@material-ui/core/Typography";
import HomeIcon from "@material-ui/icons/Home";
import Badge from "@material-ui/core/Badge";
import ArrowIcon from "@material-ui/icons/KeyboardBackspace";
import BookmarkIcon from "@material-ui/icons/Bookmark";
import ActivityIcon from "@material-ui/icons/NotificationImportant";
import ArchiveIcon from "@material-ui/icons/Archive";
import SettingsIcon from "@material-ui/icons/SettingsApplications";
import classNames from "classnames";

import { styles } from "./styles";

class SideBar extends React.PureComponent {
  state = {
    activeNavItem: "settings"
  };

  handleSetActiveNavItem = activeNavItem => {
    this.setState({
      activeNavItem
    });
  };

  navItems = [
    { name: "dashboard", icon: HomeIcon },
    { name: "documents", icon: BookmarkIcon },
    { name: "activity", icon: ActivityIcon },
    { name: "archive", icon: ArchiveIcon },
    { name: "settings", icon: SettingsIcon }
  ];

  renderUserDetails = () => {
    let { classes } = this.props;

    return (
      <div className={classes.userDetailsContainer}>
        <div className={classes.avatarContainer}>
          <img
            alt="user"
            src="https://media.licdn.com/dms/image/C5603AQHnNE6t21CVkg/profile-displayphoto-shrink_100_100/0?e=1571875200&v=beta&t=DOFMyno8Ei2tZmecWIppdRxDcicR43lX-0k2Q7rktaU"
          />
        </div>
        <Typography variant="body2" classes={{ body2: classes.userName }}>
          Jaohn Samuel
        </Typography>
        <Typography variant="body2" classes={{ body2: classes.role }}>
          Front Desk Officer
        </Typography>
        <Typography variant="body2" classes={{ body2: classes.department }}>
          Finance
        </Typography>
      </div>
    );
  };

  renderNavItems = () => {
    let { classes } = this.props,
      { activeNavItem } = this.state;

    return (
      <div style={{ display: "flex", flexDirection: "column", marginTop: 38 }}>
        {this.navItems.map(navItem => {
          let Icon = navItem.icon;

          return (
            <div
              key={navItem.name}
              className={classNames(
                classes.navItem,
                activeNavItem === navItem.name && classes.navItemActive
              )}
              onClick={() => this.handleSetActiveNavItem(navItem.name)}
            >
              <Icon
                className={classNames(
                  classes.icon,
                  activeNavItem === navItem.name && classes.iconActive
                )}
              />
              <Typography
                variant="body2"
                classes={{
                  body2: classNames(
                    classes.navItemText,
                    activeNavItem === navItem.name && classes.navItemTextActive
                  )
                }}
              >
                {navItem.name}
              </Typography>
              {navItem.name === "activity" && (
                <Badge
                  badgeContent={12}
                  color="primary"
                  classes={{ badge: classes.badge }}
                />
              )}
            </div>
          );
        })}
      </div>
    );
  };

  renderTopSection = () => {
    let { classes } = this.props;
    return (
      <div className={classes.topSectionContainer}>
        {this.renderUserDetails()}
        {this.renderNavItems()}
      </div>
    );
  };

  render() {
    let { classes } = this.props;

    return (
      <div className={classes.container}>
        {this.renderTopSection()}
        <div className={classes.navItem}>
          <div className={classes.logoutIcon}>
            <ArrowIcon style={{ fontSize: 15, color: "#fff" }} />
          </div>
          <Typography
            variant="body2"
            classes={{ body2: classes.navItemText }}
          >
            Logout
          </Typography>
        </div>
      </div>
    );
  }
}

export default withStyles(styles)(SideBar);
