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
      .then((res) => res.json())
      .then((data) => setArtisans(data));
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
  }, [onSelect]);

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
          placeholder="Rechercher par nom"
          aria-label="Rechercher un artisan par nom"
          className="search-input"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />

        <div className="search-icon-container">
          <SearchIcon />
        </div>
      </div>

      {/* résultats */}
      {query && filteredArtisans.length > 0 && (
        <ul id="search-results" className="search-results" role="listbox">
          {filteredArtisans.map((artisan) => (
            <li key={artisan.id}>
              <button
                type="button"
                role="option"
                className="btn-results"
                onClick={() => {
                  navigate(`/artisans/${artisan.id}`);
                  setQuery("");
                  onSelect?.(); // ferme la barre
                }}
              >
                {artisan.nom}
              </button>
            </li>
          ))}
        </ul>
      )}

      {query && filteredArtisans.length === 0 && (
        <p className="no-result">Aucun artisan trouvé.</p>
      )}
    </div>
  );
};

export default SearchBar;
