import { useState, useEffect } from 'react';
import Stack from '@mui/material/Stack';
import TextField from '@mui/material/TextField';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { DesktopDatePicker } from '@mui/x-date-pickers/DesktopDatePicker';
import { MobileDatePicker } from '@mui/x-date-pickers/MobileDatePicker';
import dateFormat from 'dateformat';
import axios from 'axios';
import './App.css';
import './Card.css';
import Card from './Card.js';
import DatePicker from './DatePicker.js';
import Modal from './Modal.js';
function App(props) {
  const [apiData, setApiData] = useState([]);
  const [value, setValue] = useState(new Date());
  const [isVisible, setIsVisible] = useState(false);
  const [cardData, setCardData] = useState([]);

  const handleChange = (newValue) => {
    setValue(dateFormat(newValue, 'mm-dd-yyyy'));

    // console.log('value: ', value);

    getFactDate(newValue);
  };

  async function getFactDate(selectedDate) {
    {
      const formattedValue = dateFormat(selectedDate, 'mm-dd-yyyy');
      // console.log('Formatted Date: ', formattedValue);
      const res = await axios.get('http://localhost:8080/facts', {
        params: { date: formattedValue },
      });
      // console.log('CLICKED DATA: ', res.data);
      setApiData(res.data);
    }
  }

  return (
    <div className='App'>
      {isVisible && <Modal isVisible={setIsVisible} cardInfo={cardData} />}
      <header className='App-header'>
        <h1 className='headline'>What Happened?</h1>
        <h2 className='subhead'>This day in history</h2>
        <div className='article-meta'>
          <p className='byline'>by Juan Valdez</p>
        </div>
      </header>
      <h3 className='select-date'>Select a date</h3>
      <DatePicker handleChange={handleChange} value={value} />

      <div className='flex-card'>
        {!apiData
          ? null
          : apiData.map((data, index) => {
              // {
              //   setCardData(data);
              // }
              return (
                <div key={index}>
                  <Card
                    id={data.id}
                    title={data.title}
                    thumbnail={data.thumbnail}
                    categoryName={data.category}
                    factDate={data.fact_date}
                    factSummary={data.fact_summary}
                    partiesInvolved={data.parties_involved}
                    cardData={data}
                    isVisible={setIsVisible}
                    cardInfo={setCardData}
                  />
                </div>
              );
            })}
      </div>
    </div>
  );
}

export default App;
