import React, { useEffect, useState } from "react";
import Axios from "axios";
import { makeStyles } from "@material-ui/core/styles";
import clsx from "clsx";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";
import Collapse from "@material-ui/core/Collapse";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import { red } from "@material-ui/core/colors";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import Link from "@material-ui/core/Link";
import Grid from "@material-ui/core/Grid";
import "../css/news.css";
import Button from "@material-ui/core/Button";

// import Paper from "@material-ui/core/Paper";
// Start of NEWS

const useStyles = makeStyles((theme) => ({
  rootGrid: {
    marginLeft: "5rem",
    flexGrow: 1,
  },
  root: {
    maxWidth: 500,
    maxHeight: 700,
    flexGrow: 1,
    padding: theme.spacing(1),
    textAlign: "center",
    color: theme.palette.text.primary,
  },
  media: {
    height: 300,
    width: 500,
  },
  expand: {
    transform: "rotate(0deg)",
    marginLeft: "auto",
    transition: theme.transitions.create("transform", {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: "rotate(180deg)",
  },
  avatar: {
    backgroundColor: red[500],
  },
}));

const News = () => {
  const [news, setNews] = useState();
  const [loading, setLoading] = useState(true);
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  useEffect(() => {
    async function getNews() {
      const res = await Axios.get(
        `https://newsapi.org/v2/top-headlines?country=us&apiKey=f1136103fe784cce8ea8d5f45808b038`
      );
      setNews(res.data.articles);
      console.log(news);
      setLoading(false);
    }
    getNews();
  });

  return (
    <>
      <Grid
        className={classes.rootGrid}
        justify="center"
        alignItems="center"
        container
        direction="row"
        alignContent="stretch"
        spacing={4}
      >
        {loading ? (
          <h1>Loading</h1>
        ) : (
          news.map((article) => (
            <Grid item xs={12} sm={6}>
              {/* <Paper className={classes.paper}> */}
              <Card className={classes.root}>
                <CardHeader
                  title={article.title}
                  subheader={new Date(article.publishedAt).toLocaleString()}
                />
                <CardMedia
                  className={classes.media}
                  //image src
                  image={article.urlToImage}
                />
                <CardContent>
                  <Typography
                    className="card-content"
                    variant="body2"
                    color="textPrimary"
                    component="p"
                  >
                    {article.description}
                  </Typography>
                </CardContent>
                <CardActions disableSpacing>
                  <IconButton aria-label="share">
                    <Link
                      component="button"
                      variant="body2"
                      target="_blank"
                      to={article.url}
                    >
                      <Button size="medium" variant="contained" color="primary">
                        {article.source.name}
                      </Button>
                    </Link>
                  </IconButton>
                  <IconButton
                    className={clsx(classes.expand, {
                      [classes.expandOpen]: expanded,
                    })}
                    onClick={handleExpandClick}
                    aria-expanded={expanded}
                    aria-label="show more"
                  >
                    <ExpandMoreIcon />
                  </IconButton>
                </CardActions>
                <Collapse in={expanded} timeout="auto" unmountOnExit>
                  <CardContent>
                    <Typography paragraph>{article.title}</Typography>
                    <Typography paragraph>{article.author}</Typography>
                    <Typography paragraph>{article.content}</Typography>
                  </CardContent>
                </Collapse>
              </Card>
              {/* </Paper> */}
            </Grid>
          ))
        )}
      </Grid>
    </>
  );
};

export default News;
