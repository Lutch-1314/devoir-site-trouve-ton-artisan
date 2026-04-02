import SearchIcon from "./SearchIcon";
import "../styles/_searchBar.scss";

const SearchBar = () => {
  return (
    <div className="search-bar">
      <div className="search-input-wrapper d-none d-lg-flex">

        <input
          type="text"
          placeholder="Rechercher"
          className="search-input"
        />

        <div className="search-icon-container">
          <SearchIcon />
        </div>

      </div>

      {/* icône seule en mobile */}
      <div className="d-lg-none">
        <SearchIcon />
      </div>
    </div>
  );
};

export default SearchBar;