/* eslint-disable react/prop-types */
import React from "react";
import { Article } from "./article";

export const ArticleList = (props) => {
  const { articles } = props.store.getState();
  return (
    <div>
      {Object.keys(articles).map((id) => (
        <Article
          article={articles[id]}
          author={props.store.getAuthor(articles[id].authorId)}
          key={id}
        />
      ))}
    </div>
  );
};
