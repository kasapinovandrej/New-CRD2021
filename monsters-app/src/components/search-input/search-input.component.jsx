import React from "react";
import "./search-input.style.css";

const SearchInput = ({ inputChange, placeholder }) => {
  return (
    <input
      className="search"
      type="search"
      placeholder={placeholder}
      onChange={inputChange}
    />
  );
};

export default SearchInput;
