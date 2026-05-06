import { useState, useRef } from "react";
import { useNavigate } from "react-router-dom";

import useAllArtisans from "../hooks/useAllArtisans";
import useClickOutside from "../hooks/useClickOutside";
import useEscapeKey from "../hooks/useEscapeKey";

import SearchIcon from "./SearchIcon";
import "../styles/_searchBar.scss";

const SearchBar = ({ onSelect }) => {
  
  const [query, setQuery] = useState("");

  const wrapperRef = useRef(null);

  const navigate = useNavigate();

  const { artisans = [] } = useAllArtisans();

  useClickOutside(wrapperRef, () => {
    setQuery("");
    onSelect?.();
  });

  useEscapeKey(() => {
    setQuery("");
    onSelect?.();
  });

  const filteredArtisans = artisans.filter((artisan) =>
    artisan.nom.toLowerCase().startsWith(query.toLowerCase())
  );

  return (
    <div className="search-bar" ref={wrapperRef}>
      <div className="search-input-wrapper">
        <input
          id="search"
          name="search"
          type="text"
          placeholder="Rechercher par nom"
          aria-label="Rechercher un artisan par nom"
          className="search-input"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />

        <div className="search-icon-container d-none d-lg-block">
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
