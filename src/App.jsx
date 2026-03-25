import React, { useState } from "react";

export default function App() {
  const [lat, setLat] = useState(29.87);
  const [lon, setLon] = useState(-102.28);
  const [startDate, setStartDate] = useState(new Date().toISOString().split("T")[0]);
  const [days, setDays] = useState(3);
  const [schedule, setSchedule] = useState([]);

  const generateMockSchedule = () => {
    const newSchedule = [];
    for (let i = 0; i < days; i++) {
      const currentDate = new Date(startDate);
      currentDate.setDate(currentDate.getDate() + i);
      const dateStr = currentDate.toDateString();

      const mockPasses = [
        { time: "9:30 PM", satellite: "ISS", elevation: "65°", path: "NW → SE" },
        { time: "10:00 PM", satellite: "Hubble", elevation: "50°", path: "W → E" },
        { time: "10:45 PM", satellite: "Tiangong", elevation: "72°", path: "SW → NE" },
      ];
      newSchedule.push({ date: dateStr, passes: mockPasses });
    }
    setSchedule(newSchedule);
  };

  return (
    <div style={{ padding: 20, fontFamily: "Arial", background: "#0b132b", color: "white", minHeight: "100vh" }}>
      <h1>Satellite Pass Planner</h1>
      <div style={{ marginBottom: 20 }}>
        <label>Latitude: </label>
        <input type="number" value={lat} onChange={(e) => setLat(parseFloat(e.target.value))} />
        <label style={{ marginLeft: 10 }}>Longitude: </label>
        <input type="number" value={lon} onChange={(e) => setLon(parseFloat(e.target.value))} />
      </div>
      <div style={{ marginBottom: 20 }}>
        <label>Start Date: </label>
        <input type="date" value={startDate} onChange={(e) => setStartDate(e.target.value)} />
        <label style={{ marginLeft: 10 }}>Days: </label>
        <input type="number" min="1" value={days} onChange={(e) => setDays(parseInt(e.target.value, 10))} />
      </div>
      <button onClick={generateMockSchedule} style={{ marginBottom: 20 }}>Generate Passes</button>
      {schedule.map((day, idx) => (
        <div key={idx} style={{ marginBottom: 30 }}>
          <h3>{day.date}</h3>
          <table style={{ width: "100%", border: "1px solid white", borderCollapse: "collapse" }}>
            <thead>
              <tr>
                <th style={{ border: "1px solid white", padding: "8px" }}>Time</th>
                <th style={{ border: "1px solid white", padding: "8px" }}>Object</th>
                <th style={{ border: "1px solid white", padding: "8px" }}>Elevation</th>
                <th style={{ border: "1px solid white", padding: "8px" }}>Path</th>
              </tr>
            </thead>
            <tbody>
              {day.passes.map((pass, pIdx) => (
                <tr key={pIdx}>
                  <td style={{ border: "1px solid white", padding: "8px" }}>{pass.time}</td>
                  <td style={{ border: "1px solid white", padding: "8px" }}>{pass.satellite}</td>
                  <td style={{ border: "1px solid white", padding: "8px" }}>{pass.elevation}</td>
                  <td style={{ border: "1px solid white", padding: "8px" }}>{pass.path}</td>

                </tr>
              ))}
            </tbody>
          </table>
        </div>
      ))}
    </div>
  );
}