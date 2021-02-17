import React, { FC, useState, useEffect } from "react";
import { makeStyles, Theme, createStyles } from "@material-ui/core/styles";
import { Alert, AlertTitle } from "@material-ui/lab";
import { useSelector, useDispatch } from "react-redux";
import { RootStore } from "../../redux/Store/Store";
import { setAlert } from "../../redux/Actions/alertActions";

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
  const [show, setShow] = useState(true);
  const dispatch = useDispatch();
  const Alerts = useSelector((state: RootStore) => state.alert);

  useEffect(() => {
    const timeId = setTimeout(() => {
      setShow(false);
    }, 1000);

    return () => {
      clearTimeout(timeId);
      dispatch(setAlert(""));
    };
  }, [show]);

  if (!show) {
    return null;
  }

  return (
    <div onClick={onClose}>
      <Alert severity="warning" className={classes.alert} onClick={onClose}>
        <AlertTitle className={classes.title}>Erreur !</AlertTitle>
        <strong>{message}</strong>
      </Alert>
    </div>
  );
};

export default AlertError;
