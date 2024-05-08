import React from 'react'

const Blog = () => {
  return (
    <>
     <div className="row">
          <div className="col-lg-4 col-md-6 col-12">
            {/* Single Blog */}
            <div className="single-news">
              <div className="news-head">
                <img src="/img/blog1.jpg" alt="#" />
              </div>
              <div className="news-body">
                <div className="news-content">
                  <div className="date">22 Aug, 2020</div>
                  <h2><a href="blog-single.html">We have annnocuced our new product.</a></h2>
                  <p className="text">Exciting news! Introducing our latest product, designed to elevate your experience. Discover innovation and quality in every detail.</p>
                </div>
              </div>
            </div>
            {/* End Single Blog */}
          </div>
          <div className="col-lg-4 col-md-6 col-12">
            {/* Single Blog */}
            <div className="single-news">
              <div className="news-head">
                <img src="/img/blog2.jpg" alt="#" />
              </div>
              <div className="news-body">
                <div className="news-content">
                  <div className="date">15 Jul, 2020</div>
                  <h2><a href="blog-single.html">Top five way for solving teeth problems.</a></h2>
                  <p className="text">Unlock a radiant smile with these top five ways to solve teeth problems. From proper oral hygiene to professional treatments, find the key to a healthier, happier mouth.</p>
                </div>
              </div>
            </div>
            {/* End Single Blog */}
          </div>
          <div className="col-lg-4 col-md-6 col-12">
            {/* Single Blog */}
            <div className="single-news">
              <div className="news-head">
                <img src="/img/blog3.jpg" alt="#" />
              </div>
              <div className="news-body">
                <div className="news-content">
                  <div className="date">05 Jan, 2020</div>
                  <h2><a href="blog-single.html">We provide highly business soliutions.</a></h2>
                  <p className="text">Empower your business with our highly effective solutions. Elevate performance, streamline processes, and achieve success with our tailored approach.</p>
                </div>
              </div>
            </div>
            {/* End Single Blog */}
          </div>
        </div>
    </>
  )
}

export default Blog