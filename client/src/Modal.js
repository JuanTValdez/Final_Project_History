import React from 'react';
import './Modal.css';
import Card from './Card.js';

function Modal(props) {
  const handleChildClick = function (e) {
    e.stopPropagation();
  };

  console.log('Modal: ', props.cardInfo);

  return (
    <div className='modalBackground' onClick={() => props.isVisible(false)}>
      <div className='modalContainer' onClick={handleChildClick}>
        <button onClick={() => props.isVisible(false)}>X</button>

        <div className='div-title'>
          <div className='title'>{props.cardInfo.title}</div>
        </div>
        <div className='info-box'>
          <div className='category'>{props.cardInfo.category}</div>
          <div className='date'>{props.cardInfo.fact_date}</div>
        </div>
        <div className='body'>
          <div className='fact-one'>
            {props.cardInfo.fact_long_1}
            <img alt='photo' src={props.cardInfo.thumbnail} />
          </div>
          <div className='fact-two'>{props.cardInfo.fact_long_2}</div>
        </div>
        <p>
          <iframe
            className='youtube-video'
            width='480'
            height='280'
            src='https://www.youtube.com/embed/FTAW1PvEcAk'
            title='The Normandy Landings: June 6, 1944 | D-Day Documentary'
            frameborder='0'
            allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
            allowfullscreen
          ></iframe>
        </p>
        <div className='info-footer'>
          <div className='parties-involved'>
            {props.cardInfo.parties_involved}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Modal;
