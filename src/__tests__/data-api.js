import { DataApi } from "../data-api";
import * as TEST_DATA from "../test-data.json";

const DataApiObj = new DataApi(TEST_DATA);

describe("DataApi", () => {
  it("exposes articles as an Object", () => {
    const articles = DataApiObj.getArticles();
    const articleId = TEST_DATA.articles[0].id;
    const articleTitle = TEST_DATA.articles[0].title;

    expect(articles).toHaveProperty(articleId);
    expect(articles[articleId].title).toBe(articleTitle);
  });

  it("exposes authors as an Object", () => {
    const authors = DataApiObj.getAuthors();
    const authorId = TEST_DATA.authors[0].id;
    const authorFirstName = TEST_DATA.authors[0].firstName;

    expect(authors).toHaveProperty(authorId);
    expect(authors[authorId].firstName).toBe(authorFirstName);
  });

  it("associates first author of the first article correctly", () => {
    const firstArticle = TEST_DATA.articles[0];
    const authorFirstName = TEST_DATA.authors.find(
      (x) => x.id === firstArticle.authorId
    ).firstName;

    const author = DataApiObj.getArticleAuthor(firstArticle.id);
    expect(author.firstName).toBe(authorFirstName);
  });
});
