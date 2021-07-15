import React, { memo } from "react";
import { toDateString } from "../util";

import PropTypes from "prop-types";

const articleStyle = {
  container: {
    padding: "1rem",
    display: "flex",
    flexDirection: "column",
    marginBottom: "1.5rem",
    fontFamily: "Verdana, Arial, Helvetica, sans-serif",
    border: "1px solid #ccc",
  },
  date: {
    fontSize: "0.75rem",
    marginBottom: "0.5rem",
    color: "gray",
  },
  body: {
    marginBottom: "1rem",
  },
  author: {
    fontWeight: "bold",
    textAlign: "end",
  },
};

const Article = (props) => {
  const { article, author } = props;

  return (
    <div style={articleStyle.container}>
      <h2>{article.title}</h2>
      <div style={articleStyle.date}>{toDateString(article.date)}</div>
      <div style={articleStyle.body}>{article.body}</div>
      <div style={articleStyle.author}>
        -{" "}
        <a href={author.website}>{author.firstName + " " + author.lastName}</a>
      </div>
    </div>
  );
};

export const ArticleM = memo(Article);

Article.propTypes = {
  article: PropTypes.shape({
    date: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    body: PropTypes.string.isRequired,
  }),
  author: PropTypes.shape({
    website: PropTypes.string.isRequired,
    firstName: PropTypes.string.isRequired,
    lastName: PropTypes.string.isRequired,
  }),
};
