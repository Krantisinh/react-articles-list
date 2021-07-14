import React from "react";
import { Article } from "./article";

import PropTypes from "prop-types";

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

ArticleList.propTypes = {
  store: PropTypes.object,
};
