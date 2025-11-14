Mausam -- https://mausam-jankari-blush.vercel.app/

A fast and responsive weather application built with React.
It allows users to search any city and instantly view its current weather, temperature, and air quality index (AQI).
The app also maintains a search history, showing the last 5 cities the user searched.

Features
Live Weather Search

Fetches real-time weather using OpenWeather API

Shows temperature, weather description, and weather icon

Displays AQI based on live geographic coordinates

Search History (Max 5 Entries)

Automatically stores the last 5 searched cities

New searches appear at the top

Uses modern React state management

No duplication or infinite growth

Local Storage Persistence

Search history is saved in browser memory

Data remains even after refresh or reopening the app

Responsive UI

Clean layout for desktop and mobile

Component-based structure

Tech Stack
Area	Tech
Frontend	React (Hooks, Functional Components)
Styling	Vanilla CSS
API	OpenWeather REST APIs
State Management	React useState, useEffect
Data Storage	LocalStorage
Project Structure
src/
│
├── components/
│   ├── Navbar.js
│   ├── CurrentWeather.js
│   ├── SearchedWeather.js
│   └── SearchHistory.js
│
├── utils/
│   └── FetchWeather.js
│
├── App.js
└── App.css

📌 How It Works

User enters a city in the search bar.

Clicking the search button triggers an API call.

The app:

Fetches weather

Fetches AQI using coordinates

Updates search history

The UI updates instantly with:

Location

Temperature

Weather icon + description

AQI level (“Good”, “Fair”, “Moderate”, etc.)

Setup & Installation

Clone the repo:

git clone https://github.com/your-username/weather-app.git


Install dependencies:

npm install


Add your OpenWeather API key inside FetchWeather.js.

Start the development server:

npm start

APIs Used

OpenWeather Current Weather API

OpenWeather Air Pollution API

Both require an API key.

 Screenshots 

Included 

🏁 Future Improvements

Add weekly forecast

Dark/light theme

Error handling UI (e.g., invalid city popup)


📄 License

This project is open-source and free to use.