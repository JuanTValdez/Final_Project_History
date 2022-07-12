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

function App() {
  // const [value, setValue] = useState(new Date('2014-08-18T21:11:54'));

  // const handleChange = (newValue) => {
  //   setValue(newValue);
  //   console.log(dateFormat(newValue, 'mm-d-yyyy'));
  //   console.log(newValue);
  // };

  const [apiData, setApidata] = useState(null);

  const getData = () => {
    axios.get('http://localhost:8080/facts').then((res) => {
      console.log('Data', res.data);
      setApidata(res.data);
    });
  };
  useEffect(() => {
    getData();
  }, []);

  const title = apiData ? apiData[0].title : '';
  const categoryName = apiData ? apiData[0].category : '';
  const factDate = apiData ? apiData[0].fact_date : '';
  const factSummary = apiData ? apiData[0].fact_summary : '';
  const partiesInvolved = apiData ? apiData[0].parties_involved : '';
  return (
    <div className='App'>
      <header className='App-header'>
        <h1 className='headline'>What Happened?</h1>
        <h2 className='subhead'>This day in history</h2>
        <div className='article-meta'>
          <p className='byline'>by Juan Valdez</p>
          {/* 
          <p className='dateline'>June 21, 2021</p> */}
        </div>
        {/* {apiData.map((data, index) => {
          return (
            <div key={index}>
              <h5>
                {'Date: ' +
                  `${data.fact_date}` +
                  ', category: ' +
                  `${data.category}` +
                  ', Fact Summary: ' +
                  `${data.fact_summary}`}
                <br />
                <br />
                {'Long Fact 1: ' + `${data.fact_long_1}`}
                <br />
                <br />
                {'Long Fact 2: ' + `${data.fact_long_2}`}
              </h5>
            </div>
          );
        })} */}
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
      <h3>Example </h3>

      <div className='container'>
        <div className='cellphone-container'>
          <div className='card'>
            <img
              className='card-img'
              src='https://www.buyflags.eu/sites/default/files/styles/medium/public/flags-image/state-flags/canada.png?itok=i7jzXf98'
              alt='Canada'
            />
            <div className='text-card-cont'>
              <div className='mr-grid'>
                <div className='col1'>
                  <h1>{title}</h1>
                  <ul className='card-gen'>
                    <li>{categoryName} /</li>
                    <li>{factDate} </li>
                  </ul>
                </div>
              </div>
              <div className='mr-grid summary-row'>
                <div className='col2'>
                  <h5>SUMMARY</h5>
                </div>
                <div className='col2'></div>
              </div>
              <div className='mr-grid'>
                <div className='col1'>
                  <p className='card-description'>{factSummary}</p>
                </div>
              </div>
              <div className='mr-grid parties-row'>
                <div className='col1'>
                  <p className='card-parties'>
                    {/* Parties Involved */}
                    {partiesInvolved}
                  </p>
                </div>
              </div>
              <div className='mr-grid action-row'>
                <div className='col2'></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
