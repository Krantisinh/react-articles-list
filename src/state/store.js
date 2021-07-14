import { mapArrayToObjects } from "../util";
import { CustomObservable } from "./observable";

export default class Store extends CustomObservable {
  constructor(rawData) {
    super();

    this.state = {
      articles: mapArrayToObjects(rawData.articles),
      authors: mapArrayToObjects(rawData.authors),
      searchText: "",
      matchingArticles: mapArrayToObjects(rawData.articles),
    };
  }

  getState() {
    return this.state;
  }

  getAuthor(authorId) {
    return this.state.authors[authorId];
  }

  search(searchText) {
    const newArticles = Object.entries(this.state.articles)
      .filter((article) =>
        article[1].body.toLowerCase().includes(searchText.toLowerCase())
      )
      .reduce((acc, x) => {
        acc[x[0]] = x[1];
        return acc;
      }, {});

    this.mergeWithState({
      searchText: searchText,
      matchingArticles: newArticles,
    });
  }

  mergeWithState(partialState) {
    this.state = {
      ...this.state,
      ...partialState,
    };

    this.notifyChange(this.state);
  }
}
