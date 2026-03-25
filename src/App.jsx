import React, { useState } from "react";

export default function App() {
  const [lat, setLat] = useState(29.874);
  const [lon, setLon] = useState(-102.289);
  const [results, setResults] = useState([]);

  const generateMockPasses = () => {
    // simplified placeholder logic for now
    const sample = [
      {
        time: "9:12 PM",
        name: "ISS (ZARYA)",
        elevation: "62°",
        path: "NW → SE",
      },
      {
        time: "10:03 PM",
        name: "Hubble Space Telescope",
        elevation: "48°",
        path: "W → E",
      },
      {
        time: "10:44 PM",
        name: "Tiangong",
        elevation: "82°",
        path: "SW → SE",
      },
    ];
    setResults(sample);
  };

  return (
    <div style={{ padding: 20, fontFamily: "Arial", color: "white", background: "#0b132b", minHeight: "100vh" }}>
      <h1>Satellite Pass Planner</h1>

      <div style={{ marginBottom: 20 }}>
        <label>Latitude: </label>
        <input value={lat} onChange={(e) => setLat(e.target.value)} />

        <label style={{ marginLeft: 10 }}>Longitude: </label>
        <input value={lon} onChange={(e) => setLon(e.target.value)} />

        <button onClick={generateMockPasses} style={{ marginLeft: 10 }}>
          Generate Passes
        </button>
      </div>

      {results.length > 0 && (
        <table>
          <thead>
            <tr>
              <th style={{ paddingRight: 20 }}>Time</th>
              <th style={{ paddingRight: 20 }}>Object</th>
              <th style={{ paddingRight: 20 }}>Elevation</th>
              <th>Path</th>
            </tr>
          </thead>
          <tbody>
            {results.map((r, i) => (
              <tr key={i}>
                <td>{r.time}</td>
                <td>{r.name}</td>
                <td>{r.elevation}</td>
                <td>{r.path}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
}