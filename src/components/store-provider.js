import React, { useContext } from "react";

import { StoreContext } from "../state/context";

export const StoreProvider = (Component) => {
  const context = useContext(StoreContext);
  console.log(context);
  const state = context.state;

  const WithStore = (props) => <Component {...props} state={state}></Component>;
  WithStore.displayName = `${Component.name}Container`;

  return WithStore;
};
