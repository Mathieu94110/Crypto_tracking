import React, { FC } from "react";
import { makeStyles, Theme, createStyles } from "@material-ui/core/styles";
import { Alert, AlertTitle } from "@material-ui/lab";
import Button from "@material-ui/core/Button";

interface AlertProps {
  message: string;
  onClose: () => void;
}

const useStyles = makeStyles({
  parent: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    position: "absolute",
    maxHeight: "80px",
    width: "100%",
  },

  alert: {
    backgroundColor: "rgba(255, 0, 0,0.7)",
    width: "100%",
    margin: "auto",
    display: "flex",
    justifyContent: "center",
  },
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
});

const AlertError: FC<AlertProps> = ({ message, onClose }) => {
  const classes = useStyles();
  return (
    <div style={{ textAlign: "center" }}>
      <div onClick={onClose}>
        <div className={classes.parent}>
          <div className={classes.root}>
            <Alert severity="error" className={classes.alert}>
              <AlertTitle className={classes.title}>Erreur</AlertTitle>
              <strong>{message}</strong>
              <Button
                variant="outlined"
                color="secondary"
                className={classes.button}
                onClick={onClose}
              >
                X
              </Button>
            </Alert>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AlertError;
