/* eslint-disable react/prop-types */
import React from "react";
import { toDateString } from "../util";

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

export const Article = (props) => {
  const { article, actions } = props;
  const author = actions.getArticleAuthor(article.id);

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
