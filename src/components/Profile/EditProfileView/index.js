import React from "react";
import withStyles from "@material-ui/core/styles/withStyles";
import Typography from "@material-ui/core/Typography";
import MenuItem from "@material-ui/core/MenuItem";
import Button from "@material-ui/core/Button";

import { styles } from "./styles";
import Input from "../../../atoms/Input";

class EditProfileView extends React.PureComponent {
  state = {
    fullName: "",
    email: "",
    phoneNumber: "",
    gender: "male",
    position: "",
    homeAddress: ""
  };

  handleChange = (name, value) => {
    this.setState({ [name]: value });
  };

  render() {
    let { classes } = this.props;

    return (
      <div className={classes.container}>
        <div style={{ position: "relative", width: "auto", marginBottom: 50 }}>
          <Typography variant="body1" classes={{ body1: classes.title }}>
            Edit Profile
          </Typography>
          <span className={classes.marker} />
        </div>
        <Input
          label="Full name"
          type="text"
          name="fullName"
          required={true}
          onChange={this.handleChange}
        />
        <Input
          label="Email"
          containerStyle={{ marginTop: 20 }}
          type="email"
          name="email"
          required={true}
          onChange={this.handleChange}
        />
        <Input
          label="Phone Number"
          containerStyle={{ marginTop: 20 }}
          type="number"
          name="phoneNumber"
          required={true}
          onChange={this.handleChange}
        />
        <div className={classes.row}>
          <Input
            label="Gender"
            halfInput={true}
            containerStyle={{ marginTop: 20, marginRight: 5 }}
            type="text"
            select={true}
            name="gender"
            required={true}
            onChange={this.handleChange}
          >
            <MenuItem value="male">Male</MenuItem>
            <MenuItem value="female">Female</MenuItem>
          </Input>
          <Input
            label="Position"
            halfInput={true}
            containerStyle={{ marginTop: 20, marginLeft: 5 }}
            type="text"
            select={true}
            name="position"
            required={true}
            onChange={this.handleChange}
          >
            <MenuItem value="ui/ux designer">UI/UX Designer</MenuItem>
            <MenuItem value="frontend software engineer">
              FrontEnd Software Engineer
            </MenuItem>
            <MenuItem value="backend software engineer">
              BackEnd Software Engineer
            </MenuItem>
          </Input>
        </div>
        <Input
          multiline={true}
          label="Home Address"
          rows="5"
          rowsMax="3"
          maxLength="500"
          containerStyle={{ marginTop: 20 }}
          type="text"
          name="homeAddress"
          required={true}
          onChange={this.handleChange}
        />
        <Button variant="contained" color="primary" className={classes.submitButton}>
          Update
        </Button>
      </div>
    );
  }
}

export default withStyles(styles)(EditProfileView);
