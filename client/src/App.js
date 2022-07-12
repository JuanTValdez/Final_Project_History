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

function App() {
  // const [value, setValue] = useState(new Date('2014-08-18T21:11:54'));

  // const handleChange = (newValue) => {
  //   setValue(newValue);
  //   console.log(dateFormat(newValue, 'mm-d-yyyy'));
  //   console.log(newValue);
  // };

  const [apiData, setApidata] = useState([]);

  useEffect(() => {
    async function getData() {
      const res = await axios.get('http://localhost:8080/facts');
      console.log('Data', res.data);
      setApidata(res.data);
    }
    getData();
  }, []);

  return (
    <div className='App'>
      <header className='App-header'>
        <h1 className='headline'>What Happened?</h1>
        <h2 className='subhead'>This day in history</h2>
        <div className='article-meta'>
          <p className='byline'>by Juan Valdez</p>
        </div>
      </header>
      {/* 
      <LocalizationProvider dateAdapter={AdapterDateFns}>
        <Stack spacing={3}>
          <DesktopDatePicker
            label='Date desktop'
            inputFormat='MM-dd-yyyy'
            value={value}
            onChange={handleChange}
            renderInput={(params) => <TextField {...params} />}
          />
          <MobileDatePicker
            label='Date mobile'
            inputFormat='MM/dd/yyyy'
            value={value}
            onChange={handleChange}
            renderInput={(params) => <TextField {...params} />}
          />
        </Stack>
      </LocalizationProvider> */}

      {/* {console.log('FOUND DATA:', apiData)} */}
      {!apiData
        ? null
        : apiData.map((data, index) => {
            return (
              <div key={index}>
                <Card
                  title={data.title}
                  categoryName={data.category}
                  factDate={data.fact_date}
                  factSummary={data.fact_summary}
                  partiesInvolved={data.parties_involved}
                />
              </div>
            );
          })}
    </div>
  );
}

export default App;
