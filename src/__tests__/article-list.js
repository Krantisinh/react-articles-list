import { expect, jest } from "@jest/globals";
import React from "react";
import renderer from "react-test-renderer";
import { ArticleList } from "../components/article-list";

const testProps = {
  articles: {
    a: {},
    b: {},
  },
  actions: {
    getArticleAuthor: jest.fn(() => ({})),
  },
};

describe("Article List", () => {
  it("should mount", () => {
    const tree = renderer.create(<ArticleList {...testProps} />).toJSON();

    expect(tree).toMatchSnapshot();
    expect(tree.children.length).toBe(2);
  });
});
