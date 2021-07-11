/* eslint-disable react/prop-types */
import React from "react";

import { ArticleList } from "./components/article-list";

export default function App(props) {
  return (
    <div>
      <h1>Articles</h1>

      <ArticleList store={props.store}></ArticleList>
    </div>
  );
}
