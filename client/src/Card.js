// import './App.css';
import { useState } from 'react';
import './Card.css';

function Card(props) {
  const [cardValue, setCardValue] = useState();

  const clicked = () => {
    console.log('this was clicked: ', props.cardData);
  };

  const cardData = (e) => {
    e.preventDefault();
    setCardValue(props.id);
    console.log('target: ', cardValue);
  };
  return (
    <div className='App'>
      <div className='container'>
        <div className='cellphone-container '>
          <div className='card' onClick={clicked}>
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
