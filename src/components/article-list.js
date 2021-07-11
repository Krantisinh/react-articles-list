import React from "react";
import { Article } from "./article";
import { DataApi } from "../data-api";
import * as TEST_DATA from "../test-data.json";

const dataApi = new DataApi(TEST_DATA);
const articles = dataApi.getArticles();

export const ArticleList = () => {
  return (
    <div>
      {Object.keys(articles).map((id) => (
        <Article
          article={dataApi.getArticle(id)}
          author={dataApi.getArticleAuthor(id)}
          key={id}
        />
      ))}
    </div>
  );
};
