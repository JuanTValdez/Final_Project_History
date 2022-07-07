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

function App() {
  const [value, setValue] = useState(new Date('2014-08-18T21:11:54'));

  const handleChange = (newValue) => {
    setValue(newValue);
    console.log(dateFormat(newValue, 'mm-d-yyyy'));
    console.log(newValue);
  };

  const [apiData, setApidata] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:8080/users').then((res) => {
      setApidata(res.data);
    });
  }, []);

  return (
    <div className='App'>
      <header className='App-header'>
        {apiData.map((data, index) => {
          return (
            <div key={index}>
              <h5>
                {'Id: ' +
                  `${data.id}` +
                  ', Email: ' +
                  `${data.email}` +
                  ', Password: ' +
                  `${data.password}`}
              </h5>
            </div>
          );
        })}
      </header>

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
      </LocalizationProvider>
    </div>
  );
}

export default App;
