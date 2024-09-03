import { useState, useEffect } from 'react';

const FetchData = (url) => {
  const [data, setData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(url);

        if (!response.ok) {
          console.error(`HTTP error! Status: ${response.status}`);
          setData(null);
          return;
        }

        const jsonData = await response.json();
        setData(jsonData);
      } catch (error) {
        console.error('Fetch error:', error);
        setData(null);
      }
    };

    fetchData();
  }, [url]);

  return data;
};

export default FetchData;
