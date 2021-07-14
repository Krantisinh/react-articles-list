import React from "react";
import ReactDOMServer from "react-dom/server";
import axios from "axios";

import App from "../app";
import config from "../server/config";

import Store from "../state/store";

export const serverRender = async () => {
  const data = await axios
    .get(`http://${config.host}:${config.port}/data`)
    .then((x) => x.data);

  const store = new Store(data);

  return {
    initialMarkup: ReactDOMServer.renderToString(<App store={store} />),
    initialState: data,
  };
};
