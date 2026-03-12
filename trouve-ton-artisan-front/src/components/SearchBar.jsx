import SearchIcon from "./SearchIcon";
import "../styles/SearchIcon.scss";

const SearchBar = () => {
  return (
    <div className="search-bar">

      {/* input visible seulement sur desktop */}
      <input
        type="text"
        placeholder="Rechercher"
        className="search-input d-none d-lg-block"
      />

      {/* icône toujours visible */}
      <SearchIcon />

    </div>
  );
};

export default SearchBar;