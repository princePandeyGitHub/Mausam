import { useState, useEffect } from "react";
import "./Navbar.css";

export default function Navbar({ search, setSearch, btnState, setBtnState }) {
  const [dateTime, setDateTime] = useState("");

const handleSearch = () => {
  if (!search.trim()) return; // skip empty searches
  setBtnState(true);
};


  const handleKeyDown = (e) => {
    if (e.key === "Enter") handleSearch();
  };

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      const options = {
        weekday: "short",
        month: "short",
        day: "numeric",
        hour: "2-digit",
        minute: "2-digit",
      };
      setDateTime(now.toLocaleString("en-US", options));
    };
    updateTime();
    const timer = setInterval(updateTime, 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <nav className="navbar">
      <div className="logo">
        <img
          src="https://cdn-icons-png.flaticon.com/512/869/869869.png"
          alt="logo"
        />
        <h1>Mausam</h1>
      </div>

      <div className="search-bar">
        <input
          type="text"
          placeholder="Search location..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          onKeyDown={handleKeyDown}
        />
        <button onClick={handleSearch}>🔍</button>
      </div>

      <div className="date">{dateTime}</div>
    </nav>
  );
}
