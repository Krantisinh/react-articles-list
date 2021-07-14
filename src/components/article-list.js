import React, { useContext } from "react";
import { Article } from "./article";

import PropTypes from "prop-types";
import { StoreContext } from "../state/context";

export const ArticleList = (props) => {
  const context = useContext(StoreContext);

  return (
    <div>
      {Object.keys(props.articles).map((id) => (
        <Article
          article={props.articles[id]}
          author={context.getAuthor(props.articles[id].authorId)}
          key={id}
        />
      ))}
    </div>
  );
};

ArticleList.propTypes = {
  articles: PropTypes.object,
};
