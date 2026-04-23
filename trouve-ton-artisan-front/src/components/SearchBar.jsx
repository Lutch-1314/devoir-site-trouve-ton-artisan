import { useState } from "react";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import SearchIcon from "./SearchIcon";
import "../styles/_searchBar.scss";

const SearchBar = ({ onSelect }) => {

  const [artisans, setArtisans] = useState([]);
  const [query, setQuery] = useState("");

  useEffect(() => {
    fetch("http://localhost:3000/api/artisans/noms")
      .then(res => res.json())
      .then(data => setArtisans(data));
  }, []);

  const filteredArtisans = artisans.filter((artisan) =>
    artisan.nom.toLowerCase().startsWith(query.toLowerCase())
  );

  const navigate = useNavigate();

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
            {filteredArtisans.map((artisan) => (
              <li
                key={artisan.id}
                onClick={() => {
                  navigate(`/artisans/${artisan.id}`);
                  setQuery("");
                  onSelect(); // ferme la barre
                }}
              >
                {artisan.nom}
              </li>
            ))}
          </ul>
        )}
    </div>
  );
};

export default SearchBar;