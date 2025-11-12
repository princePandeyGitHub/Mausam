import CurrentWeather from "./components/CurrentWeather";
import Navbar  from "./components/Navbar";
import SearchedWeather from "./components/SearchedWeather"
import './App.css'
import SearchHistory from "./components/SearchHistory";
import { useState,useEffect } from "react";
function App () {
  const [search, setSearch] = useState("");
  const [btnState,setBtnState] = useState(false);
  const [history, setHistory] = useState([]);
  const [loaded, setLoaded] = useState(false); // 👈 flag to prevent early save

 // Load from localStorage once
  useEffect(() => {
    const saved = localStorage.getItem("weatherHistory");
    if (saved) {
      try {
        setHistory(JSON.parse(saved));
      } catch (e) {
        console.error("Failed to parse localStorage:", e);
      }
    }
    setLoaded(true); // ✅ mark as ready
  }, []);

  // Save only after load is complete
  useEffect(() => {
    if (loaded) {
      localStorage.setItem("weatherHistory", JSON.stringify(history));
    }
  }, [history, loaded]);

    // 📜 Function to update history
  const updateHistory = (location, weather, temperature) => {
    setHistory([...history,{
      location: location,
      weather: weather,
      temperature: temperature

    }])
  };

  return (
    <div>
      <Navbar search={search} setSearch={setSearch} btnState={btnState} setBtnState={setBtnState}/>
      <div className="weather">
        <CurrentWeather />
        <SearchedWeather search={search} setSearch = {setSearch} btnState={btnState} setBtnState={setBtnState} updateHistory={updateHistory}/>
      </div>
      <SearchHistory history = {history} />
    </div>
  );
}
export default App;