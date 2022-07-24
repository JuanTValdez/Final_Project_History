// import './App.css';
import { useState } from 'react';
import './Card.css';
import Modal from './Modal.js';

function Card(props) {
  const cardData = (e) => {
    e.preventDefault();

    console.log('Clicked Card: ', props.cardData);
  };

  return (
    <div className='App'>
      {/* {isVisible && <Modal isVisible={setIsVisible} />} */}

      <div
        className='container'
        onClick={() => {
          props.isVisible(true);

          props.cardInfoData(props.cardData);
        }}
      >
        <div className='cellphone-container'>
          <div
            className='card'

            // onClick={cardData}
          >
            <img
              className='card-img'
              src={props.cardData.thumbnail}
              alt='Canada'
            />
            <div className='text-card-cont'>
              <div className='mr-grid'>
                <div className='col1'>
                  <h1>{props.title}</h1>
                  <ul className='card-gen'>
                    <li>{props.categoryName} </li>
                    <li>{props.factDate} </li>
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
                  <p className='card-description'>{props.factSummary}</p>
                </div>
              </div>
              <div className='mr-grid parties-row'>
                <div className='col1'>
                  <p className='card-parties'>{props.partiesInvolved}</p>
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

export default Card;
