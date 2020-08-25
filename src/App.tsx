import React, { useEffect } from "react";
import axios from "axios";
import "./App.css";

function App() {
  useEffect(() => {
    axios.get(`http://localhost:8000/`).then((res) => {
      console.log(res);
    });
  }, []);

  return (
    <div>
      <form action="/" method="POST">
        <button type="submit">klicka här!</button>
      </form>
    </div>
  );
}

export default App;
