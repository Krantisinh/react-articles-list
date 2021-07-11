/* eslint-disable react/prop-types */
import React from "react";

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
  const article = props.article;
  const author = props.author;
  return (
    <div style={articleStyle.container}>
      <h2>{article.title}</h2>
      <div style={articleStyle.date}>{article.date}</div>
      <div style={articleStyle.body}>{article.body}</div>
      <div style={articleStyle.author}>
        - {author.firstName + " " + author.lastName}
      </div>
    </div>
  );
};
