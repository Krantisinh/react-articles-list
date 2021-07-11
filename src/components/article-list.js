/* eslint-disable react/prop-types */
import React from "react";
import { Article } from "./article";

export const ArticleList = (props) => {
  return (
    <div>
      {Object.keys(props.articles).map((id) => (
        <Article
          article={props.articles[id]}
          actions={props.actions}
          key={id}
        />
      ))}
    </div>
  );
};
