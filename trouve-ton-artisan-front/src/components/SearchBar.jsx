import { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import SearchIcon from "./SearchIcon";
import "../styles/_searchBar.scss";

const SearchBar = ({ onSelect }) => {

  const [artisans, setArtisans] = useState([]);
  const [query, setQuery] = useState("");

  const wrapperRef = useRef(null);

  const navigate = useNavigate();

  useEffect(() => {
    fetch("http://localhost:3000/api/artisans/noms")
      .then(res => res.json())
      .then(data => setArtisans(data));
  }, []);

  useEffect(() => {
  const handleClickOutside = (event) => {
    if (wrapperRef.current && !wrapperRef.current.contains(event.target)) {
      setQuery("");
      onSelect?.(); // ferme si besoin
    }
  };

  document.addEventListener("mousedown", handleClickOutside);

  return () => {
    document.removeEventListener("mousedown", handleClickOutside);
  };
  }, []);

  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === "Escape") {
        setQuery("");
        onSelect?.();
      }
    };

    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [onSelect]);

  const filteredArtisans = artisans.filter((artisan) =>
    artisan.nom.toLowerCase().startsWith(query.toLowerCase())
  );

  return (
    <div className="search-bar" ref={wrapperRef}>
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
                  onSelect?.(); // ferme la barre
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