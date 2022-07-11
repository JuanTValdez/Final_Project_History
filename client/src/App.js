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
      console.log('ddd', res.data);
      setApidata(res.data);
    });
  };
  useEffect(() => {
    getData();
  }, []);

  const categoryName = apiData ? apiData[0].category : '';

  // console.log('Data: ', apiData[0].category);
  return (
    <div className='App'>
      <header className='App-header'>
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
      {/* <div className='card'>
        <div className='thumbnail'>
          <img src='https://www.buyflags.eu/sites/default/files/styles/medium/public/flags-image/state-flags/canada.png?itok=i7jzXf98' />
        </div>
        <div className='cardDetails'>
          <p> {`Title:`}</p>

          <p>Category: {categoryName} </p>
        </div>
      </div> */}

      <div class='container'>
        <div class='cellphone-container'>
          <div class='movie'>
            <img
              class='movie-img'
              src='https://www.buyflags.eu/sites/default/files/styles/medium/public/flags-image/state-flags/canada.png?itok=i7jzXf98'
            />
            <div class='text-movie-cont'>
              <div class='mr-grid'>
                <div class='col1'>
                  <h1>Interstellar</h1>
                  <ul class='movie-gen'>
                    <li>PG-13 /</li>
                    <li>2h 49min /</li>
                    <li>Adventure, Drama, Sci-Fi,</li>
                  </ul>
                </div>
              </div>
              <div class='mr-grid summary-row'>
                <div class='col2'>
                  <h5>SUMMARY</h5>
                </div>
                <div class='col2'></div>
              </div>
              <div class='mr-grid'>
                <div class='col1'>
                  <p class='movie-description'>
                    A group of elderly people are giving interviews about having
                    lived in a climate of crop blight and constant dust
                    reminiscent of The Great Depression of the 1930's. The first
                    one seen is an elderly woman stating her father was a
                    farmer, but did not start out that way.{' '}
                  </p>
                </div>
              </div>
              <div class='mr-grid actors-row'>
                <div class='col1'>
                  <p class='movie-actors'>
                    Matthew McConaughey, Anne Hathaway, Jessica Chastain
                  </p>
                </div>
              </div>
              <div class='mr-grid action-row'>
                <div class='col2'></div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <a href='https://dribbble.com/geehm' target='_blank'>
        <img
          class='dribbble-link'
          src='https://image.flaticon.com/icons/png/512/124/124037.png'
        />
      </a>
    </div>
  );
}

export default App;
