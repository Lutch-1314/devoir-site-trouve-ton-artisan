import { useState } from "react";
import { useEffect } from "react";
import SearchIcon from "./SearchIcon";
import "../styles/_searchBar.scss";

const SearchBar = () => {

  const [artisans, setArtisans] = useState([]);
    const [query, setQuery] = useState("");

useEffect(() => {
  fetch("http://localhost:3000/api/artisans/noms")
    .then(res => res.json())
    .then(data => setArtisans(data));
}, []);



  const filteredArtisans = artisans.filter((artisan) =>
    artisan.toLowerCase().startsWith(query.toLowerCase())
  );

  return (
    <div className="search-bar">
      <div className="search-input-wrapper">

        <input
          type="text"
          placeholder="Rechercher"
          className="search-input"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />

        

        <div className="search-icon-container">
          <SearchIcon />
        </div>

      </div>

      {/* résultats */}
        {query && (
          <ul className="search-results">
            {filteredArtisans.map((name, index) => (
              <li key={index}>{name}</li>
            ))}
          </ul>
        )}

    </div>
  );
};

export default SearchBar;