import React, { useEffect, useState } from "react";
import axios from "axios";
function App() {
  const [backendData, setBackendData] = useState([{}]);

  useEffect(() => {
    axios
      .get("/api")
      .then((response) => {
        console.log(response.data);
        setBackendData(response.data);
      })
      .catch((error) => {
        console.error("Error fetching data from API:", error);
      });
  }, []);

  return <div>App</div>;
}

export default App;
