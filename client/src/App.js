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

  const [apiData, setApiData] = useState([]);
  // TODO:
  // value is the bug
  const [value, setValue] = useState(new Date());

  const handleChange = (newValue) => {
    setValue(dateFormat(newValue, 'mm-dd-yyyy'));

    //TODO: FIX DATE BUG
    // May need to make another state to hold the formatted value
    console.log('Value before format: ', newValue);
    console.log(
      'This has been passed from datepicker component: ',
      dateFormat(value, 'mm-dd-yyyy')
    );

    getFactDate();
    console.log('FFF: ', newValue);
  };

  async function getFactDate(e) {
    {
      // this may be the primary issue.
      const formattedValue = dateFormat(value, 'mm-dd-yyyy');
      console.log('Formatted Date: ', formattedValue);
      const res = await axios.get('http://localhost:8080/facts', {
        params: { date: formattedValue },
      });
      console.log('CLICKED DATA: ', res.data);
      setApiData(res.data);
    }
  }

  // useEffect(() => {
  //   async function getData(e) {
  //     const res = await axios.get('http://localhost:8080/facts');
  //     console.log('Data', res.data);

  //     setApiData(res.data);
  //   }
  //   getData();
  // }, []);

  return (
    <div className='App'>
      <header className='App-header'>
        <h1 className='headline'>What Happened?</h1>
        <h2 className='subhead'>This day in history</h2>
        <div className='article-meta'>
          <p className='byline'>by Juan Valdez</p>
        </div>
      </header>

      <DatePicker handleChange={handleChange} value={value} />

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
