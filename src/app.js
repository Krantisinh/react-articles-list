import React from "react";
import PropTypes from "prop-types";

import { ArticleList } from "./components/article-list";

export default function App(props) {
  return (
    <div>
      <h1>Articles</h1>

      <ArticleList store={props.store}></ArticleList>
    </div>
  );
}

App.propTypes = {
  store: PropTypes.object,
};
