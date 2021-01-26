import React, { useEffect, useState } from "react";
// import Article from "../Article";
import Axios from "axios";

const News = () => {
  const [news, setNews] = useState();
  const [loading, setLoading] = useState(true);

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

  // let newsToRender;
  // if (news) {
  //   newsToRender = news.map((article, i) => {
  //     return <Article key={i} article={article} />;
  //   });
  // }
  {
    /* <p>{article.author}</p>; */
  }
  return (
    <>
      {console.log(news)}
      {loading ? (
        <h1>Loading</h1>
      ) : (
        news.map((article) => (
          <>
            <p>{article.author}</p>
            <p>{article.source.name}</p>
          </>
        ))
      )}
    </>
  );
};

export default News;
