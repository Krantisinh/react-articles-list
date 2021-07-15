import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";

import { ArticleListM } from "./components/article-list";
import { StoreContext } from "./state/context";
import { SearchM } from "./components/search";

export default function App(props) {
  const [state, setState] = useState(props.store.getState());

  const onSearch = (searchText) => {
    props.store.search(searchText);
  };

  useEffect(() => {
    const subscriptionId = props.store.subscribe((newState) => {
      setState(newState);
    });

    return () => {
      props.store.unsubscribe(subscriptionId);
    };
  }, []);

  return (
    <div>
      <h1>Articles</h1>

      <StoreContext.Provider value={props.store}>
        <SearchM onSearch={onSearch}></SearchM>
        <ArticleListM articles={state.matchingArticles}></ArticleListM>
      </StoreContext.Provider>
    </div>
  );
}

App.propTypes = {
  store: PropTypes.object,
};
