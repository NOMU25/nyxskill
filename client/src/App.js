import React, { useState, useEffect } from 'react';
import axios from 'axios';

function App() {
  const [data, setData] = useState({});

  useEffect(() => {
    fetchData();
  }, []);


  const fetchData = async () => {
    try {
      const response = await axios.get('http://localhost:3001/message');
      setData(response.data);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  
    return (
        <div>
            <h1>React + Node.js Integration</h1>
            <p>{data.message}</p>
        </div>
    );
}

export default App;
