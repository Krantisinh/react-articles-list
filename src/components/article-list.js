import React, { useContext } from "react";
import { Article } from "./article";

import PropTypes from "prop-types";
import { StoreContext } from "../state/context";

export const ArticleList = () => {
  const context = useContext(StoreContext);
  const state = context.getState();

  return (
    <div>
      {Object.keys(state.articles).map((id) => (
        <Article
          article={state.articles[id]}
          author={context.getAuthor(state.articles[id].authorId)}
          key={id}
        />
      ))}
    </div>
  );
};

ArticleList.propTypes = {
  state: PropTypes.shape({
    articles: PropTypes.Object,
    getAuthor: PropTypes.func,
  }),
};
