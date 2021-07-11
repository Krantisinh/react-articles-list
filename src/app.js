import React, { useEffect, useState } from "react";

import { ArticleList } from "./components/article-list";
import { DataApi } from "./data-api";

export default function App() {
  const initialState = {
    articles: [],
    authors: [],
  };
  const [data, setData] = useState(initialState);

  useEffect(() => {
    const fetchData = async () => {
      const data = await fetch("/data").then((x) => x.json());

      console.log(data);

      setData(data);
    };

    fetchData();
  }, []);

  const dataApi = new DataApi(data);

  const articles = dataApi.getArticles();

  const getArticleAuthor = (articleId) => dataApi.getArticleAuthor(articleId);

  const actions = {
    getArticleAuthor,
  };

  return (
    <div>
      <h1>Articles</h1>

      <ArticleList articles={articles} actions={actions}></ArticleList>
    </div>
  );
}
