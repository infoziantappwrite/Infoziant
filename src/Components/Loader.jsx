
import React, { useState, useEffect } from 'react';
import './css/Loader.css'; 

const Loader = ({ fetchData, children }) => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const loadData = async () => {
      const startTime = performance.now();

      try {
       
        await fetchData(); 

        const endTime = performance.now();
        const loadTime = endTime - startTime;

        console.log(`Page loaded in ${loadTime.toFixed(2)} ms`);

        setIsLoading(false);
      } catch (error) {
        console.error('Error fetching data:', error);
        setIsLoading(false);
      }
    };

    loadData();
  }, [fetchData]);

  return (
    <div>
      {isLoading ? (
        <div className="loader-container">
          <div className="loader">
            <div className="bar-loader"></div>
            <div className="bar-loader"></div>
            <div className="bar-loader"></div>
          </div>
        </div>
      ) : (
        <div>{children}</div> 
      )}
    </div>
  );
};

export default Loader;
