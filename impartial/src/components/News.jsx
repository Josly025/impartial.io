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
import Avatar from "@material-ui/core/Avatar";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import { red } from "@material-ui/core/colors";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import Link from "@material-ui/core/Link";
import Grid from "@material-ui/core/Grid";
import "../css/news.css";
// import Paper from "@material-ui/core/Paper";
// Start of NEWS

const useStyles = makeStyles((theme) => ({
  root: {
    float: "left",
    maxWidth: 400,
    maxHeight: 300,
    marginBottom: 10,
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
  }, []);

  return (
    <>
      {console.log(news)}
      {loading ? (
        <h1>Loading</h1>
      ) : (
        news.map((article) => (
          <>
            <div className={classes.root}>
              <Grid
                className="grid"
                container
                direction="row"
                justify="center"
                alignItems="center"
              >
                <Grid item xs class="div-1">
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
                        color="textSecondary"
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
                          to={article.url}
                        >
                          {article.source.name}
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
              </Grid>
            </div>
            {/* start of card */}
          </>
        ))
      )}
    </>
  );
};

export default News;
