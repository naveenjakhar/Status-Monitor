import React from 'react'
import Pin from '../Asset/pin.svg'

const Card = (props) => {
    
    return (
        <>
       
          <div id="card" className="col-2 mr-2">
              <div className="row mt-2">
                  <div className="col-6 mt-2">
                      <p id="title">Indigo</p>
                  </div>
                  <div className="col-6 d-flex justify-content-end">
                      <img src={Pin} alt="Pin"></img>
                  </div>
              </div>
              <div className="row mt-2">
                  <div className="col-6 mt-2">
                      <p id="title">Indigo</p>
                  </div>
                  <div className="col-6 d-flex justify-content-end">
                      <img src={Pin} alt="Pin"></img>
                  </div>
              </div>
          </div>  
          <div id="card" className="col-2">
              <div className="row mt-2">
                  <div className="col-6 mt-2">
                      <p id="title">Air</p>
                  </div>
                  <div className="col-6 d-flex justify-content-end">
                      <img src={Pin} alt="Pin"></img>
                  </div>
              </div>
              <div className="row mt-2">
                  <div className="col-6 mt-2">
                      <p id="title">{props.data}</p>
                  </div>
                  <div className="col-6 d-flex justify-content-end">
                      <img src={Pin} alt="Pin"></img>
                  </div>
              </div>
          </div>  
      
        </>
    )
}

export default Card
