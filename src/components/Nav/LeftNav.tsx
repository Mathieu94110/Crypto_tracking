import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  IconButton,
  makeStyles,
  Drawer,
  Link,
  MenuItem,
} from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";
import React, { useState, useEffect } from "react";
import { Link as RouterLink } from "react-router-dom";

const headersData = [
  {
    label: "Page d'accueil",
    href: "/",
  },
  {
    label: "100 premières cryptos-monnaies",
    href: "/100_premières_cryptos-monnaies",
  },
  {
    label: "Suivre une crypto-monnaie",
    href: "/Suivre_une_crypto-monnaie",
  },
  {
    label: "Gagnants et perdants",
    href: "/Gagnants_et_perdants",
  },
  {
    label: "Les cryptos que je suis",
    href: "/Les_cryptos_que_je_suis",
  },
];

const useStyles = makeStyles(() => ({
  header: {
    backgroundColor: "#F79C5A",
    height: "10vh",
    width: "100%",
  },

  menuButton: {
    fontFamily: "Open Sans, sans-serif",
    fontWeight: 900,
    size: "18px",
    height: "100%",
    width: "20%",
    "&:hover": {
      color: "gold",
    },
  },
  toolbar: {
    display: "flex",
    justifyContent: "space-between",
    height: "100%",
    width: "100%",
  },
  drawerContainer: {
    padding: "20px 30px",
  },
  toolBarHeight: {
    height: "100%",
  },
  drawer: {
    display: "flex",
    justifyContent: "space-between",
  },
}));

export default function Header() {
  const {
    header,
    menuButton,
    toolbar,
    drawerContainer,
    drawer,
    toolBarHeight,
  } = useStyles();

  const [state, setState] = useState({
    mobileView: false,
    drawerOpen: false,
  });

  const { mobileView, drawerOpen } = state;

  useEffect(() => {
    const setResponsiveness = () => {
      return window.innerWidth < 900
        ? setState((prevState) => ({ ...prevState, mobileView: true }))
        : setState((prevState) => ({ ...prevState, mobileView: false }));
    };

    setResponsiveness();

    window.addEventListener("resize", () => setResponsiveness());
  }, []);

  const displayDesktop = () => {
    return (
      <Toolbar className={toolbar}>
        <div>{getMenuButtons()}</div>
      </Toolbar>
    );
  };

  const displayMobile = () => {
    const handleDrawerOpen = () =>
      setState((prevState) => ({ ...prevState, drawerOpen: true }));
    const handleDrawerClose = () =>
      setState((prevState) => ({ ...prevState, drawerOpen: false }));

    return (
      <Toolbar className={toolBarHeight}>
        <IconButton
          {...{
            edge: "start",
            color: "inherit",
            "aria-label": "menu",
            "aria-haspopup": "true",
            onClick: handleDrawerOpen,
          }}
        >
          <MenuIcon />
        </IconButton>

        <Drawer
          {...{
            anchor: "left",
            open: drawerOpen,
            onClose: handleDrawerClose,
          }}
          className={drawer}
        >
          <div className={drawerContainer}>{getDrawerChoices()}</div>
        </Drawer>
      </Toolbar>
    );
  };

  const getDrawerChoices = () => {
    return headersData.map(({ label, href }) => {
      return (
        <Link
          {...{
            component: RouterLink,
            to: href,
            color: "inherit",
            style: { textDecoration: "none" },
            key: label,
          }}
        >
          <MenuItem>{label}</MenuItem>
        </Link>
      );
    });
  };

  const getMenuButtons = () => {
    return headersData.map(({ label, href }) => {
      return (
        <Button
          {...{
            key: label,
            color: "inherit",
            to: href,
            component: RouterLink,
            className: menuButton,
          }}
        >
          {label}
        </Button>
      );
    });
  };

  return (
    <header>
      <AppBar className={header}>
        {mobileView ? displayMobile() : displayDesktop()}
      </AppBar>
    </header>
  );
}
