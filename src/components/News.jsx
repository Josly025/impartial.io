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
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import Link from "@material-ui/core/Link";
import Grid from "@material-ui/core/Grid";
import "../css/news.css";
import Button from "@material-ui/core/Button";
import Divider from "@material-ui/core/Divider";
import Input from "@material-ui/core/Input";

const useStyles = makeStyles((theme) => ({
  rootGrid: {
    marginLeft: "1rem",
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
  btn: {
    backgroundColor: "#ff9800",
  },
  subTitle: {
    textAlgin: "center",
    marginRight: "6rem",
    marginTop: "-2rem",
    fontSize: "1.2rem",
    color: "#ff9800",
    float: "right",
    textTransform: "italize",
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
  ////search
  const [loadingTwo, setLoadingTwo] = useState(true);
  const [search, setSearch] = useState();
  const [searchData, setSearchData] = useState();
  //http://api.mediastack.com/v1/news?access_key=e7661c8be9b44978349eca2ac24e2e1e&countries=us&languages=en

  useEffect(() => {
    async function getNews() {
      const res = await Axios.get(
        `https://api.nytimes.com/svc/news/v3/content/all/all.json?api-key=3U4bhB5mL3M3foeQ8G4TT3ok5NNBZ8I8`
        // `https://api.nytimes.com/svc/news/v3/content/all/all.json?api-key=3U4bhB5mL3M3foeQ8G4TT3ok5NNBZ8I8`
        // `https://api.nytimes.com/svc/mostpopular/v2/viewed/1.json?api-key=3U4bhB5mL3M3foeQ8G4TT3ok5NNBZ8I8`
      );
      console.log(res.data.results);
      setNews(res.data.results);
      setLoading(false);
    }
    getNews();
  }, []);
  console.log(news);
  // //handle the input on change
  function handleSearch() {
    searchNews();
    async function searchNews() {
      console.log(search);
      const res = await Axios.get(
        `https://api.nytimes.com/svc/search/v2/articlesearch.json?q=${search}&api-key=3U4bhB5mL3M3foeQ8G4TT3ok5NNBZ8I8`
      );
      setSearchData(res.data.response.docs);
      console.log(res.data.response.docs);
      setLoadingTwo(false);
      setLoading(true);
    }
    setSearch("");
  }

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
        <Grid item xs={12}>
          <Input
            placeholder="Search By Topic"
            className="input"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
          <Button variant="outlined" type="submit" onClick={handleSearch}>
            Search
          </Button>
          <Typography className={classes.subTitle} gutterBottom>
            | Articles Courtesy of the New York Times |
          </Typography>
        </Grid>

        {loading ? (
          <> </>
        ) : (
          news.map((article) => (
            <Grid item xs={12} sm={6}>
              {/* <Paper className={classes.paper}> */}
              <Card className={classes.root}>
                <CardHeader title={article.title} subheader={article.section} />
                <CardHeader
                  subheader={new Date(article.published_date).toLocaleString()}
                />
                <CardMedia
                  className={classes.media}
                  //image src
                  image={article.multimedia[2].url}
                />
                <CardContent>
                  <Typography
                    className="card-content"
                    variant="body2"
                    color="textPrimary"
                    component="p"
                  >
                    {article.abstract}
                  </Typography>
                </CardContent>
                <CardActions disableSpacing>
                  <Button
                    size="medium"
                    href={article.url}
                    className={classes.btn}
                  >
                    {article.source}
                  </Button>

                  {/* <IconButton
                    className={clsx(classes.expand, {
                      [classes.expandOpen]: expanded,
                    })}
                    onClick={handleExpandClick}
                    aria-expanded={expanded}
                    aria-label="show more"
                  >
                    <Typography paragraph>{article.author}</Typography>
                  </IconButton> */}
                </CardActions>
                <Collapse in={expanded} timeout="auto" unmountOnExit>
                  <CardContent>
                    <Typography paragraph>{article.abstract}</Typography>
                    <Typography paragraph></Typography>
                  </CardContent>
                </Collapse>
              </Card>
              {/* </Paper> */}
            </Grid>
          ))
        )}

        {loadingTwo ? (
          <></>
        ) : (
          searchData.map((article) => (
            <Grid item xs={12} sm={6}>
              {/* <Paper className={classes.paper}> */}
              <Card className={classes.root}>
                <CardHeader
                  title={article.headline.main}
                  subheader={article.section_name}
                />
                <CardHeader
                  subheader={new Date(article.pub_date).toLocaleString()}
                />
                <CardMedia
                  className={classes.media}
                  //image src
                  image={
                    `https://static01.nyt.com/` + article.multimedia[3].url
                  }
                />
                <CardContent>
                  <Typography
                    className="card-content"
                    variant="body2"
                    color="textPrimary"
                    component="p"
                  >
                    {article.abstract}
                  </Typography>
                </CardContent>
                <CardActions disableSpacing>
                  <IconButton aria-label="share">
                    <Link component="button" variant="body2">
                      <Button
                        size="medium"
                        href={article.web_url}
                        variant="contained"
                        className={classes.btn}
                      >
                        <Divider />
                        {article.source}
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
