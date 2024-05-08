import React from 'react';

const PricingTable = () => {
  return (
    <section className="pricing-table section">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="section-title">
              <h2>We Provide You The Best Treatment In Reasonable Price</h2>
              <img src="/img/section-img.png" alt="#" />
              <p>Exceptional treatment at affordable rates: Experience the best care without breaking the bank.</p>
            </div>
          </div>
        </div>
        <div className="row">
          {/* Single Table */}
          <div className="col-lg-4 col-md-12 col-12">
            <div className="single-table">
              {/* Table Head */}
              <div className="table-head">
                <div className="icon">
                  <i className="icofont icofont-ui-cut"></i>
                </div>
                <h4 className="title">Plastic Surgery</h4>
                <div className="price">
                  <p className="amount">$199<span>/ Per Visit</span></p>
                </div>
              </div>
              {/* Table List */}
              <ul className="table-list">
                <li><i className="icofont icofont-ui-check"></i>Enhanced Confidence</li>
                <li><i className="icofont icofont-ui-check"></i>Improved Quality of Life</li>
                <li className="cross"><i className="icofont icofont-ui-close"></i>Potential Health Risks</li>
                <li className="cross"><i className="icofont icofont-ui-close"></i>Extended Recovery Period</li>
                <li className="cross"><i className="icofont icofont-ui-close"></i>Possibility of Unsatisfactory Results</li>
              </ul>
              <div className="table-bottom">
                <a className="btn" href="/appointment">Get Appointment</a>
              </div>
              {/* Table Bottom */}
            </div>
          </div>
          {/* End Single Table*/}
          {/* Single Table */}
          <div className="col-lg-4 col-md-12 col-12">
            <div className="single-table">
              {/* Table Head */}
              <div className="table-head">
                <div className="icon">
                  <i className="icofont icofont-tooth"></i>
                </div>
                <h4 className="title">Teeth Whitening</h4>
                <div className="price">
                  <p className="amount">$299<span>/ Per Visit</span></p>
                </div>
              </div>
              {/* Table List */}
              <ul className="table-list">
                <li><i className="icofont icofont-ui-check"></i>Enhanced Aesthetics</li>
                <li><i className="icofont icofont-ui-check"></i>Boost in Confidence</li>
                <li><i className="icofont icofont-ui-check"></i>Non-Invasive Procedure</li>
                <li className="cross"><i className="icofont icofont-ui-close"></i>Sensitivity</li>
                <li className="cross"><i className="icofont icofont-ui-close"></i>Temporary Results</li>
              </ul>
              <div className="table-bottom">
                <a className="btn" href="/appointment">Get Appointment</a>
              </div>
              {/* Table Bottom */}
            </div>
          </div>
          {/* End Single Table*/}
          {/* Single Table */}
          <div className="col-lg-4 col-md-12 col-12">
            <div className="single-table">
              {/* Table Head */}
              <div className="table-head">
                <div className="icon">
                  <i className="icofont icofont-heart-beat"></i>
                </div>
                <h4 className="title">Heart Surgery</h4>
                <div className="price">
                  <p className="amount">$399<span>/ Per Visit</span></p>
                </div>
              </div>
              {/* Table List */}
              <ul className="table-list">
                <li><i className="icofont icofont-ui-check"></i>Life-Saving Intervention</li>
                <li><i className="icofont icofont-ui-check"></i>Improved Quality of Life</li>
                <li><i className="icofont icofont-ui-check"></i>Increased Longevity</li>
                <li><i className="icofont icofont-ui-check"></i>Enhanced Physical Activity</li>
                <li><i className="icofont icofont-ui-check"></i>Technological Advancements</li>
              </ul>
              <div className="table-bottom">
                <a className="btn" href="/appointment">Get Appointment</a>
              </div>
              {/* Table Bottom */}
            </div>
          </div>
          {/* End Single Table*/}
        </div>
      </div>
    </section>
  );
}

export default PricingTable;
