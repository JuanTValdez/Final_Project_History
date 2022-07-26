import React, { useState } from 'react';
import Stack from '@mui/material/Stack';
import TextField from '@mui/material/TextField';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { DesktopDatePicker } from '@mui/x-date-pickers/DesktopDatePicker';
import { makeStyles } from '@material-ui/core';
import dateFormat from 'dateformat';

const useStyles = makeStyles({
  dateWrapper: {
    borderBottom: '2px solid #333333',
    margin: '0px 0px 25px 0px',
  },
  input: {
    backgroundColor: 'white',
    width: '25%',
    margin: '25px auto',
    borderRadius: '25px',
  },
});

export default function DatePicker(props) {
  const classes = useStyles();
  return (
    <div className={classes.dateWrapper}>
      <LocalizationProvider dateAdapter={AdapterDateFns}>
        <Stack className={classes.input} spacing={3}>
          <DesktopDatePicker
            // label='Date desktop'
            inputFormat='MM-dd-yyyy'
            value={props.value}
            onChange={props.handleChange}
            renderInput={(params) => <TextField {...params} />}
          />
        </Stack>
      </LocalizationProvider>
    </div>
  );
}
