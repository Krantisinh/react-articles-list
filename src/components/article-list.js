import React, { memo, useContext } from "react";
import { ArticleM } from "./article";

import PropTypes from "prop-types";
import { StoreContext } from "../state/context";

const ArticleList = (props) => {
  const context = useContext(StoreContext);

  return (
    <div>
      {Object.keys(props.articles).map((id) => (
        <ArticleM
          article={props.articles[id]}
          author={context.getAuthor(props.articles[id].authorId)}
          key={id}
        />
      ))}
    </div>
  );
};

export const ArticleListM = memo(ArticleList);

ArticleList.propTypes = {
  articles: PropTypes.object,
};
