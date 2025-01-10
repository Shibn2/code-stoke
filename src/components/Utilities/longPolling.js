import React, { useEffect, useState } from "react";
import axios from "axios";

const LongPollingComponent = () => {
  const [data, setData] = useState(null);

  const fetchData = async () => {
    try {
      const response = await axios.get("/api/long-polling"); // Example long-polling endpoint
      setData(response.data);
      fetchData(); // Immediately initiate another long polling request upon response
    } catch (error) {
      console.error("Error fetching data:", error);
      setTimeout(fetchData, 5000); // Retry after 5 seconds on error
    }
  };

  useEffect(() => {
    fetchData(); // Initial call to start long polling
  }, []);

  return (
    <div>
      {data ? (
        <ul>
          {data.map((item) => (
            <li key={item.id}>{item.name}</li>
          ))}
        </ul>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default LongPollingComponent;
