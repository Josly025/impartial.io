import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import "../css/header.css";
import TrendingUpIcon from "@material-ui/icons/TrendingUp";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    marginBottom: "5rem",
  },
  menuButton: {
    marginTop: theme.spacing(3),
    fontSize: "2rem",
    textTransform: "uppercase",
    letterSpacing: ".25rem",
  },
  menuIcon: {
    marginTop: theme.spacing(0.1),
    fontSize: "4rem",
    color: "#ff9800",
  },
  title: {
    margin: theme.spacing(4.5),
    fontSize: "1.2rem",
    color: "#ff9800",
  },

  toolbar: {
    minHeight: "6rem",
    alignItems: "flex-start",
    paddingTop: theme.spacing(1),
    paddingBottom: theme.spacing(2),
    border: ".2rem #ff9800",
  },
}));

const Header = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar variant="dense" className={classes.toolbar}>
          <IconButton edge="start" color="inherit" aria-label="menu">
            <TrendingUpIcon className={classes.menuIcon} />
          </IconButton>
          <Typography
            variant="h6"
            color="inherit"
            className={classes.menuButton}
          >
            Impartial
          </Typography>
          <Typography className={classes.title} gutterBottom>
            The U.S. News Source Providing A Reliable Form of Media
          </Typography>
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default Header;
