// src/App.jsx
import React, { useState } from "react";
import SearchBar from "./components/SearchBar";
import StatusIndicator from "./components/StatusIndicator";
import axios from "axios";

const App = () => {
  const [status, setStatus] = useState(""); // For tracking search status
  const [results, setResults] = useState([]); // To store the search results

  const handleSearch = async (query) => {
    const apiUrl = "https://vit-tm-task.api.trademarkia.app/api/v3/us";

    const requestBody = {
      input_query: query,
      input_query_type: "",
      sort_by: "default",
      status: [],
      exact_match: false,
      date_query: false,
      owners: [],
      attorneys: [],
      law_firms: [],
      mark_description_description: [],
      classes: [],
      page: 1,
      rows: 10,
      sort_order: "desc",
      states: [],
      counties: [],
    };

    try {
      setStatus("searching"); // Set status to "Searching"
      const response = await axios.post(apiUrl, requestBody, {
        headers: {
          "Content-Type": "application/json",
        },
      });

      if (response.data && response.data.length > 0) {
        setResults(response.data);
        setStatus(""); // Clear the status if results are found
      } else {
        setStatus("no-results"); // No results found
      }
    } catch (error) {
      console.error("Error fetching data:", error);
      setStatus("error"); // Set error status
    }
  };

  return (
    <div className="App" style={{ padding: "20px" }}>
      <div style={{ display: "flex", alignItems: "center", marginBottom: "20px" }}>
        <img src="../public/logo.png" alt="Trademarkia Logo" style={{ height: "40px", marginRight: "20px" }} />
        <SearchBar handleSearch={handleSearch} />
      </div>
      <div className="search-options">
        <ul style={{ display: "flex", listStyleType: "none", gap: "15px" }}>
          <li><strong>TM Trademarks</strong></li>
          <li>Owners</li>
          <li>Logos</li>
          <li>Internet Brand Search</li>
          <li>Copyrights</li>
        </ul>
      </div>

      {/* Status Indicator */}
      <StatusIndicator status={status} />

      {/* Display search results (if any) */}
      <div className="results">
        {results.length > 0 && (
          <ul>
            {results.map((result, index) => (
              <li key={index}>{result.name}</li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default App;
