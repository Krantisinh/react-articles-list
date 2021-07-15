import React, { memo, useState } from "react";

import PropTypes from "prop-types";

const SearchStyle = {
  textContainer: {
    margin: "1rem 0",
  },
};

const Search = (props) => {
  const [value, setValue] = useState("");

  const handleInput = (event) => {
    const val = event.target.value;
    setValue(val);
    props.onSearch(val);
  };

  return (
    <div style={SearchStyle.textContainer}>
      <input type="text" value={value} onInput={handleInput}></input>
    </div>
  );
};

Search.propTypes = {
  onSearch: PropTypes.func,
};

export const SearchM = memo(Search);
