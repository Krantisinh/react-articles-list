import React from "react";
import { ArticleList } from "./components/article-list";

import { DataApi } from "./data-api";
import * as TEST_DATA from "./test-data.json";

export default function App() {
  const dataApi = new DataApi(TEST_DATA);
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
