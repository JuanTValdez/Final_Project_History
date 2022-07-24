import React from 'react';
import './Modal.css';
import Card from './Card.js';

function Modal(props) {
  const handleChildClick = function (e) {
    e.stopPropagation();
  };

  console.log('Modal: ', props.infoFromCard);

  return (
    <div className='modalBackground' onClick={() => props.isVisible(false)}>
      <div className='modalContainer' onClick={handleChildClick}>
        <button onClick={() => props.isVisible(false)}>X</button>
        <div className='title'>{props.infoFromCard.title}</div>
        <div className='body'>{props.infoFromCard.fact_summary}</div>
        <div className='footer'></div>
      </div>
    </div>
  );
}

export default Modal;
