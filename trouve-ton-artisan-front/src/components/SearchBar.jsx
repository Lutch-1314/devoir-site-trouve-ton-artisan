import SearchIcon from "./SearchIcon";
import "../styles/_searchBar.scss";

const SearchBar = () => {
  return (
    <div className="search-bar">
      <div className="search-input-wrapper">

        <input
          type="text"
          placeholder="Rechercher"
          className="search-input"
        />

        <div className="search-icon-container">
          <SearchIcon />
        </div>

      </div>
    </div>
  );
};

export default SearchBar;