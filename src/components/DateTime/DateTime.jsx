import React, { useEffect, useState } from 'react';
import './DateTime.scss';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import WbSunnyIcon from '@mui/icons-material/WbSunny';
import { useSelector } from 'react-redux';

const DateTime = () => {
  const isItBright = useSelector((state) => state.isItDay.isItDay);
  const [currentDateTime, setCurrentDateTime] = useState(new Date());
  const options = { month: 'long', day: 'numeric' };
  const formattedDate = currentDateTime.toLocaleDateString(undefined, options);

  useEffect(() => {}, [isItBright]);
  const CurrentHourOfTheDay = () => {
    if (isItBright) {
      return (
        <WbSunnyIcon
          sx={{
            mr: 1,
            ml: 3,
            mt: 3,
            verticalAlign: 'top',
            fontSize: '53px',
            color: '#FFC300',
          }}
        />
      );
    } else {
      return (
        <DarkModeIcon
          sx={{
            mr: 1,
            ml: 3,
            verticalAlign: 'top',
            fontSize: '53px',
            color: '#E0E0E0',
          }}
        />
      );
    }
  };
  return (
    <p className="dateCtr">
      <CurrentHourOfTheDay />
      <span style={{ color: isItBright ? '#FFA500' : '#ffd700' }}>
        <span className="cstDateStyle">{currentDateTime.getDate()}</span>
        <span className="monthStyle">{formattedDate.split(' ')[0]}</span>
      </span>
    </p>
  );
};

export default DateTime;
