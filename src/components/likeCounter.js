// Counter.js
import React, { useState, useEffect } from 'react';
// import counter from "../Assets/Data/likeCounter.json"

const LikeCounter = () => {
  const [count, setCount] = useState(0);

  const handleIncrement = () => {
    setCount(count + 1);
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('../Assets/Data/likeCounter.json');
        const data = await response.json();
        setCount(data.likes);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

//   useEffect(() => {
//     const intervalId = setInterval(() => {
//       // Simulate real-time updates
//       setCount((prevCount) => {
//         const newCount = prevCount + 1;
//         saveData(newCount);
//         return newCount;
//       });
//     }, 2000); // Increment every 2 seconds

//     return () => clearInterval(intervalId);
//   }, []);

  const saveData = async (newCount) => {
    try {
      await fetch('../Assets/Data/likeCounter.json', {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ likes: newCount }),
      });
    } catch (error) {
      console.error('Error saving data:', error);
    }
  };

  return (
    <div>
      <h1>{count} Likes</h1>
      <button onClick={handleIncrement}>Like</button>
      <button onClick={saveData}>Update Likes</button>
    </div>
  );
};

export default LikeCounter;
