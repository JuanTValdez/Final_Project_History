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

function App() {
  // Do a search for react axios argument

  const [apiData, setApidata] = useState([]);

  useEffect(() => {
    async function getData(e) {
      const res = await axios.get('http://localhost:8080/facts');
      console.log('Data', res.data);
      // console.log('target: ', e.target.value);
      setApidata(res.data);
    }
    getData();
  }, []);

  const clicked = (e) => {
    console.log('jjj: ', e.target.value);
  };
  return (
    <div className='App'>
      <header className='App-header'>
        <h1 className='headline'>What Happened?</h1>
        <h2 className='subhead'>This day in history</h2>
        <div className='article-meta'>
          <p className='byline'>by Juan Valdez</p>
        </div>
      </header>

      <DatePicker />

      <div className='flex-card'>
        {!apiData
          ? null
          : apiData.map((data, index) => {
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
                  />
                </div>
              );
            })}
      </div>
    </div>
  );
}

export default App;
