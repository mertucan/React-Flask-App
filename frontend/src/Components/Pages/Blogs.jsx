import React from 'react';
import HeadContent from '../HeadContent/HeadContent';
import { useBlogs, useCategories, useTags } from '../../Hooks';

const Blogs = () => {

  const [categoriesData, categoriesError] = useCategories();
  const [tagsData, tagsError] = useTags();
  const [blogsData, blogsError] = useBlogs();
  
  if(categoriesError || tagsError || blogsError) return <p>{categoriesError.message || tagsError.message || blogsError.message}</p>;
  if(!categoriesData || !tagsData || !blogsData) return null;

  return (
    <>
      <HeadContent />
      
      {/* Single News */}
      <section className="news-single section">
        <div className="container">
          <div className="row">
            <div className="col-lg-8 col-12">
              <div className="row">
                <div className="col-12">
                  <div className="single-main">
                    {/* News Head */}
                    <div className="news-head">
                      <img src="/img/blog1.jpg" alt="#" />
                    </div>
                    {/* News Title */}
                    <h1 className="news-title"><a href="/">More than 80 clinical trials launch to test of the coronavirus .</a></h1>
                    {/* Meta */}
                    <div className="meta">
                      <div className="meta-left">
                        <span className="author"><a href="#"><img src="/img/author1.jpg" alt="#" /></a>
                          <span><a href="#">Naimur Rahman</a></span>												
                          <span className="date"><i className="fa fa-clock-o"></i>03 Feb 2019</span>
                        </span>
                      </div>
                      <div className="meta-right">
                        <span className="comments"><a href="#"><i className="fa fa-comments"></i></a></span>
                        <span className="views"><i className="fa fa-eye"></i></span>
                      </div>
                    </div>
                    {/* News Text */}
                    <div className="news-text">
                      <p>The ongoing global effort to combat the COVID-19 pandemic has led to the initiation of more than 80 clinical trials dedicated to testing and understanding the coronavirus. These trials encompass a wide range of research areas, including vaccine development, treatment strategies, and diagnostic methods.</p>
                      <div className="image-gallery">
                      </div>
                      <p>In the race against time, researchers and healthcare professionals around the world have come together to conduct these clinical trials, each contributing valuable insights to the collective understanding of the virus. The trials aim not only to find effective vaccines and treatments but also to enhance our knowledge of the virus's behavior, transmission dynamics, and potential long-term effects on individuals.</p>
                      <blockquote className="overlay">
                        <p>The collaboration between scientific communities, pharmaceutical companies, and healthcare institutions underscores the urgency and importance of finding solutions to the global health crisis. As these trials progress, the hope is that they will pave the way for breakthroughs that can mitigate the impact of the coronavirus and contribute to building a more resilient and prepared world for future health challenges. The commitment to scientific inquiry and innovation remains a beacon of hope in the midst of these challenging times.</p>					
                      </blockquote>
                    </div>
                    <div className="blog-bottom">
                      {/* Social Share */}
                      <ul className="social-share">
                        <li className="facebook"><a href="https://www.facebook.com/" target="_blank"><i className="fa fa-facebook"></i><span>Facebook</span></a></li>
                        <li className="twitter"><a href="https://twitter.com/" target="_blank"><i className="fa fa-twitter"></i><span>Twitter</span></a></li>
                        <li className="google-plus"><a href="https://plus.google.com/" target="_blank"><i className="fa fa-google-plus"></i><span>Google Plus</span></a></li>
                        <li className="linkedin"><a href="https://www.linkedin.com/" target="_blank"><i className="fa fa-linkedin"></i><span>LinkedIn</span></a></li>
                        <li className="pinterest"><a href="https://www.pinterest.com/" target="_blank"><i className="fa fa-pinterest"></i><span>Pinterest</span></a></li>
                      </ul>										
                      {/* Next Prev */}
                      <ul className="prev-next">
                        <li className="prev"><a href="#"><i className="fa fa-angle-double-left"></i></a></li>
                        <li className="next"><a href="#"><i className="fa fa-angle-double-right"></i></a></li>
                      </ul>
                      {/*/ End Next Prev */}
                    </div>
                  </div>
                </div>
                <div className="col-12">
                <div className="blog-comments">
                  <h2>All Comments</h2>
                  <div className="comments-body">
                    {blogsData.blogs.map((blog, index) => (
                      <div className="comment" key={index}>
                        <div className="meta-left">
                          <span className="author">
                            <a href="#"><img src="/img/no-pp.png" alt="#" /></a>
                            <span><a href="#">{blog.name} {blog.surname}</a></span>
                          </span>
                        </div>
                        <p>{blog.message}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
                <div className="col-12">
                  <div className="comments-form">
                    <h2>Leave Comments</h2>
                    {/* Contact Form */}
                    <form action="/" method="post" className="form">
                      <div className="row">
                        <div className="col-lg-6">
                          <div className="form-group">
                            <input type="text" name="name" placeholder="Name" required="" />
                          </div>
                        </div>
                        <div className="col-lg-6">
                          <div className="form-group">
                            <input type="text" name="surname" placeholder="Surname" required="" />
                          </div>
                        </div>
                        <div className="col-lg-6">
                          <div className="form-group">
                            <input type="email" name="email" placeholder="E-Mail" required="required" />
                          </div>
                        </div>
                        <div className="col-lg-6">
                          <div className="form-group">
                            <textarea name="message" placeholder="Type your message here" required=""></textarea>
                          </div>
                        </div>
                        <div className="col-12">
                          <div className="form-group button">	
                            <button type="submit" className="btn primary"><i className="fa fa-send"></i>Submit Comment</button>
                          </div>
                        </div>
                      </div>
                    </form>
                    {/*/ End Contact Form */}
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-12">
              <div className="main-sidebar">
                {/* Single Widget */}
                <div className="single-widget category">
                  <h3 className="title">Blog Categories</h3>
                  <ul className="categor-list">
                  {categoriesData.categories.map((category) => {return <option value={category.categories}>{category.categories}</option>})}
                  </ul>
                </div>
                {/*/ End Single Widget */}
                {/* Single Widget */}
                <div className="single-widget side-tags">
                  <h3 className="title">Tags</h3>
                  <ul className="tag">
                  {tagsData.blog_tags.map((tag) => {return <option value={tag.tags}>{tag.tags}</option>})}
                  </ul>
                </div>
                {/*/ End Single Widget */}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Blogs;
