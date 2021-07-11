import { mapArrayToObjects } from "./util";

export class Store {
  constructor(rawData) {
    this.state = {
      articles: mapArrayToObjects(rawData.articles),
      authors: mapArrayToObjects(rawData.authors),
    };
  }

  getState() {
    return this.state;
  }

  getAuthor(authorId) {
    return this.state.authors[authorId];
  }
}
