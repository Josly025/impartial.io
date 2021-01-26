import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import "../css/header.css";
import TrendingUpIcon from "@material-ui/icons/TrendingUp";
import InputBase from "@material-ui/core/InputBase";
import { fade } from "@material-ui/core/styles";
import SearchIcon from "@material-ui/icons/Search";

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
  },
  search: {
    marginTop: theme.spacing(4),
    position: "relative",
    borderRadius: theme.shape.borderRadius,
    backgroundColor: fade(theme.palette.common.white, 0.15),
    "&:hover": {
      backgroundColor: fade(theme.palette.common.white, 0.25),
    },
    marginLeft: 0,
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      marginLeft: theme.spacing(1),
      width: "auto",
    },
  },
  searchIcon: {
    padding: theme.spacing(0, 2),
    height: "100%",
    position: "absolute",
    pointerEvents: "none",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  inputRoot: {
    color: "primary",
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      width: "12ch",
      "&:focus": {
        width: "20ch",
      },
    },
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
          <Typography className={classes.title} color="textWhite" gutterBottom>
            The U.S. News Source Providing a Reliable Form of Media By Using
            Mulitple Sources
          </Typography>
          <div className={classes.search}>
            <div className={classes.searchIcon}>
              <SearchIcon />
            </div>
            <InputBase
              placeholder="Search…"
              classes={{
                root: classes.inputRoot,
                input: classes.inputInput,
              }}
              inputProps={{ "aria-label": "search" }}
            />
          </div>
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default Header;
