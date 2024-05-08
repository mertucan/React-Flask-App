import React from 'react';
import Blog from './Blog';

const BlogTable = () => {
  return (
    <section className="blog section" id="blog">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="section-title">
              <h2>Keep up with Our Most Recent Medical News.</h2>
              <img src="/img/section-img.png" alt="#" />
              <p>Explore our blog for insightful articles, health tips, and the latest in medical advancements. Your journey to wellness starts here.</p>
            </div>
          </div>
        </div>
       <Blog />
      </div>
    </section>
  );
}

export default BlogTable;
