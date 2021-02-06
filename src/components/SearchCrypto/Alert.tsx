import React, { FC } from "react";
import { makeStyles, Theme, createStyles } from "@material-ui/core/styles";
import { Alert, AlertTitle } from "@material-ui/lab";
import Button from "@material-ui/core/Button";

interface AlertProps {
  message: string;
  onClose: () => void;
}

const useStyles = makeStyles({
  title: {
    fontWeight: 700,
  },
  button: {
    marginLeft: "15px",
    color: "#000",
    height: "30px",
    padding: "0 15px",
    border: " 1 px solid #fff",
    borderRadius: "0px",
  },
  alert: {
    justifyContent: "center",
    margin: "auto",
    textAlign: "center",
    alignItems: "center",
  },
});

const AlertError: FC<AlertProps> = ({ message, onClose }) => {
  const classes = useStyles();
  return (
    <div onClick={onClose}>
      <Alert severity="warning" className={classes.alert} onClick={onClose}>
        <AlertTitle className={classes.title}>Attention !</AlertTitle>
        <strong>{message}</strong>
      </Alert>
    </div>
  );
};

export default AlertError;
