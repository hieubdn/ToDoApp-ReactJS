import React, { useState, useEffect } from 'react';

const CurrentDateTime = () => {
  const [currentDateTime, setCurrentDateTime] = useState(new Date());

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentDateTime(new Date());
    }, 1000);

    // Cleanup interval on component unmount
    return () => clearInterval(intervalId);
  }, []);

  const formatDateTime = (date) => {
    const dateOptions = {
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    };

    const timeOptions = {
      hour: 'numeric',
      minute: 'numeric',
      second: 'numeric',
      hour12: false,
    };

    const formattedDate = date.toLocaleDateString('vi-VN', dateOptions);
    const formattedTime = date.toLocaleTimeString('vi-VN', timeOptions);

    return `${formattedDate} ${formattedTime}`;
  };

  return (
    <div>
      <p className='time'>{formatDateTime(currentDateTime)}</p>
    </div>
  );
};

export default CurrentDateTime;
