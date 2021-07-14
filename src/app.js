import React from "react";
import PropTypes from "prop-types";

import { ArticleList } from "./components/article-list";
import { StoreContext } from "./state/context";

export default function App(props) {
  return (
    <div>
      <h1>Articles</h1>

      <StoreContext.Provider value={props.store}>
        <ArticleList></ArticleList>
      </StoreContext.Provider>
    </div>
  );
}

App.propTypes = {
  store: PropTypes.object,
};
