import React from "react";
import PropTypes from "prop-types";
import withStyles from "@material-ui/core/styles/withStyles";
import TextField from "@material-ui/core/TextField";
import Typography from "@material-ui/core/Typography";

import { styles } from "./styles";

class Input extends React.PureComponent {
  static propTypes = {
    halfInput: PropTypes.bool,
    containerStyle: PropTypes.object,
    ...TextField.propTypes
  };

  render() {
    let {
        classes,
        children,
        defaultValue,
        halfInput,
        type,
        required,
        onChange,
        containerStyle,
        name,
        label,
        disabled,
        select,
        rowsMax,
        rows,
        multiline
      } = this.props,
      percentWidth = halfInput ? "50%" : "100%";

    return (
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          width: percentWidth,
          ...containerStyle
        }}
      >
        <Typography variant="body2" classes={{ body2: classes.label }}>
          {label}
        </Typography>
        <TextField
          type={type}
          required={required || false}
          disabled={disabled || false}
          select={select || false}
          className={classes.textField}
          defaultValue={defaultValue}
          fullWidth={true}
          multiline={multiline}
          margin="dense"
          rows={rows ? rows : ""}
          InputProps={{ style: { height: !multiline && 45 } }}
          rowsMax={rowsMax ? rowsMax : ""}
          variant="outlined"
          inputProps={{ "aria-label": "input" }}
          onChange={e => onChange(name, e.target.value)}
        >
          {children}
        </TextField>
      </div>
    );
  }
}

export default withStyles(styles)(Input);
