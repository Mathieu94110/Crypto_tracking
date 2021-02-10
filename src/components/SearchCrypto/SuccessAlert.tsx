import React, { FC, useState, useEffect } from "react";
import { makeStyles, Theme, createStyles } from "@material-ui/core/styles";
import { Alert, AlertTitle } from "@material-ui/lab";
import { useSelector, useDispatch } from "react-redux";
import { RootStore } from "../../redux/Store/Store";
import { setAlertSuccess } from "../../redux/Actions/alertActions";

interface AlertProps {
  message: string;
  onClose: () => void;
}

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    breakpoints: {
      values: {
        xs: 0,
        sm: 600,
        md: 960,
        lg: 1280,
        xl: 1920,
      },
    },
    alerts: {
      height: "100px",
      width: "100%",
      [theme.breakpoints.up("md")]: {
        height: "10vh",
      },
    },
    alert: {
      justifyContent: "center",
    },

    emptyAlert: {
      width: "100%",
      height: "100%",

      [theme.breakpoints.up("md")]: {
        height: "10vh",
      },
    },
    page: {
      textAlign: "center",
      display: "column",
      width: "100%",
      maxHeight: "650px",
      [theme.breakpoints.up("md")]: {
        height: "100vh",
      },
    },
    homeTitle: {
      height: "60px",
      lineHeight: "60px",
      color: "#fff",
      background: "#0063cc",
      width: "100%",
      fontSize: "1.2em",
      [theme.breakpoints.up("md")]: {
        height: "10vh",
        width: "100%",
      },
    },
    title: {
      fontWeight: 700,
      [theme.breakpoints.up("md")]: {},
    },
    formAndResult: {
      display: "block",
      justifyContent: "space-evenly",
      height: "700px",

      alignItems: "center",
      [theme.breakpoints.up("md")]: {
        display: "flex",
        height: "calc(80vh - 100px)",
        width: "100%",
      },
    },
  })
);

const SuccessAlert: FC<AlertProps> = ({ message, onClose }) => {
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
      dispatch(setAlertSuccess(""));
    };
  }, [show]);

  if (!show) {
    return null;
  }

  return (
    <div onClick={onClose}>
      <Alert severity="success" className={classes.alert}>
        <AlertTitle className={classes.title}>Succès</AlertTitle>
        <strong>{message}</strong>
      </Alert>
      ;
    </div>
  );
};
export default SuccessAlert;
