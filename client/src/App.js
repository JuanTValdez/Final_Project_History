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
      <div className='card'>
        <div className='thumbnail'>
          <img src='https://www.buyflags.eu/sites/default/files/styles/medium/public/flags-image/state-flags/canada.png?itok=i7jzXf98' />
        </div>
        <div className='cardDetails'>
          <p> {`Title:`}</p>

          <p>Category: {categoryName} </p>
        </div>
      </div>
    </div>
  );
}

export default App;
