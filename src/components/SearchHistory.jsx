import "./SearchHistory.css";

export default function SearchHistory({ history }) {
  return (
    <div className="history-card">
      <h2>Previous Searches</h2>

      {history.length === 0 ? (
        <p className="empty">No recent searches yet.</p>
      ) : (
        <div className="history-list">
          {history.map((item, index) => (
            <div className="history-item" key={index}>
              <div className="left">
                <h3>{item.location}</h3>
                <p className="weather">{item.weather}</p>
              </div>
              <div className="right">
                <span className="temp">{item.temperature}°C</span>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
