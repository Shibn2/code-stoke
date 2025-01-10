import React, { useEffect, useState } from "react";
import axios from "axios";

function ShortPolling() {
  const [data, setData] = useState([]);

  const fetchData = async () => {
    const response = await fetch("https://jsonplaceholder.typicode.com/posts");
    const data = await response.json();
    setData(data);
  };

  useEffect(() => {
    const timerId = setTimeout(() => fetchData, 5000);
    return clearTimeout(timerId);
  }, []);

  return (
    <div>
      {data.map((item) => (
        <div key={item.id}>
          <h3>{item.title}</h3>
          <p>{item.body}</p>
        </div>
      ))}
    </div>
  );
}

export default ShortPolling;
