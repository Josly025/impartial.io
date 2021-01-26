import React, { useEffect, useState } from "react";
import Article from "./Article";
import Axios from "axios";

const News = () => {
  const [news, setNews] = useState();

  useEffect(() => {
    async function getNews() {
      const res = await Axios.get(
        `https://newsapi.org/v2/top-headlines?country=us&apiKey=f1136103fe784cce8ea8d5f45808b038`
      );
      setNews(res.data.articles);
      // console.log(res.data.articles);
    }
    getNews();
  }, []);
  console.log(news);

  return (
    <>
      {news.map((article, id) => (
        <Article id="id" article="article" />
      ))}
    </>
  );
};

export default News;
