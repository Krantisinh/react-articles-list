import { mapArrayToObjects } from "./util";

export class DataApi {
  constructor(rawData) {
    this.rawData = rawData;
  }

  getAuthors() {
    return mapArrayToObjects(this.rawData.authors);
  }

  getArticles() {
    return mapArrayToObjects(this.rawData.articles);
  }

  getAuthor(id) {
    return this.getAuthors()[id];
  }

  getArticle(id) {
    return this.getArticles()[id];
  }

  getArticleAuthor(articleId) {
    return this.getAuthor(this.getArticle(articleId).authorId);
  }
}
