import React from 'react';
import Client from './Client';

const Clients = () => {
  return (
    <div className="clients overlay">
      <div className="container">
        <div className="row">
          <div className="col-lg-12 col-md-12 col-12">
            <div className="owl-carousel clients-slider">
              <Client />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Clients;
