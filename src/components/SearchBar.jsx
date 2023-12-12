import React from "react";
import PropTypes from "prop-types";
import { FaSearch } from "react-icons/fa";

const SearchBar = ({ keyword, onKeywordChange }) => {
    return (
        <div className="neumorphism-flat search-bar">
            <input
                type="search"
                className="input-search neumorphism-pressed"
                value={keyword}
                onChange={(event) => onKeywordChange(event.target.value)}
            />
            <FaSearch size={30} className="icon" />
        </div>
    );
};

SearchBar.propTypes = {
    keyword: PropTypes.string.isRequired,
    onKeywordChange: PropTypes.func.isRequired,
};

export default SearchBar;
