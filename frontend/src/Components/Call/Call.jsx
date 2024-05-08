import React from 'react';

const Call = () => {
  return (
    <section className="call-action overlay" data-stellar-background-ratio="0.5">
      <div className="container">
        <div className="row">
          <div className="col-lg-12 col-md-12 col-12">
            <div className="content">
              <h2>Do you need Emergency Medical Care? Call @ 1234 56789</h2>
              <p>In need of emergency medical care? Reach out to us immediately. Your well being is our priority, and help is just a call away.</p>
              <div className="button">
                <a href="/contact" className="btn">Contact Now</a>
                <a href="/learn" className="btn">Learn More →</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Call;
