import './Card.css';

function Card(props) {
  return (
    <div className='App'>
      <div
        className='container'
        onClick={() => {
          props.isVisible(true);

          props.cardInfo(props.cardData);
        }}
      >
        <div className='cellphone-container'>
          <div className='card'>
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
                <div className='col1 card-footer'>
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
