function App() {
  return (
    <div className="App">
      <div className="back-to-top"></div>

      <header>
        <nav className="navbar navbar-expand-lg navbar-light bg-white sticky" data-offset="500">
          <div className="container">
            <a href="#" className="navbar-brand">Seo<span className="text-primary">Gram.</span></a>

            <button className="navbar-toggler" data-toggle="collapse" data-target="#navbarContent" aria-controls="navbarContent" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>

            <div className="navbar-collapse collapse" id="navbarContent">
              <ul className="navbar-nav ml-auto">
                <li className="nav-item active">
                  <a className="nav-link" href="index.html">Home</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="about.html">About</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="service.html">Services</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="blog.html">Blog</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="contact.html">Contact</a>
                </li>
                <li className="nav-item">
                  <a className="btn btn-primary ml-lg-2" href="#">Free Analytics</a>
                </li>
              </ul>
            </div>

          </div>
        </nav>

        <div className="container">
          <div className="page-banner home-banner">
            <div className="row align-items-center flex-wrap-reverse h-100">
              <div className="col-md-6 py-5 wow fadeInLeft">
                <h1 className="mb-4">Let's Check and Optimize your website!</h1>
                <p className="text-lg text-grey mb-5">Ignite the most powerfull growth engine you have ever built for your company</p>
                <a href="#" className="btn btn-primary btn-split">Watch Video <div className="fab"><span className="mai-play"></span></div></a>
              </div>
              <div className="col-md-6 py-5 wow zoomIn">
                <div className="img-fluid text-center">
                  <img src="/img/banner_image_1.svg" alt="" />
                </div>
              </div>
            </div>
            <a href="#about" className="btn-scroll" data-role="smoothscroll"><span className="mai-arrow-down"></span></a>
          </div>
        </div>
      </header>

      <div className="page-section">
        <div className="container">
          <div className="row">
            <div className="col-lg-4">
              <div className="card-service wow fadeInUp">
                <div className="header">
                  <img src="/img/services/service-1.svg" alt="" />
                </div>
                <div className="body">
                  <h5 className="text-secondary">SEO Consultancy</h5>
                  <p>We help you define your SEO objective & develop a realistic strategy with you</p>
                  <a href="service.html" className="btn btn-primary">Read More</a>
                </div>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="card-service wow fadeInUp">
                <div className="header">
                  <img src="/img/services/service-2.svg" alt="" />
                </div>
                <div className="body">
                  <h5 className="text-secondary">Content Marketing</h5>
                  <p>We help you define your SEO objective & develop a realistic strategy with you</p>
                  <a href="service.html" className="btn btn-primary">Read More</a>
                </div>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="card-service wow fadeInUp">
                <div className="header">
                  <img src="/img/services/service-3.svg" alt="" />
                </div>
                <div className="body">
                  <h5 className="text-secondary">Keyword Research</h5>
                  <p>We help you define your SEO objective & develop a realistic strategy with you</p>
                  <a href="service.html" className="btn btn-primary">Read More</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="page-section" id="about">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6 py-3 wow fadeInUp">
              <span className="subhead">About us</span>
              <h2 className="title-section">The number #1 SEO Service Company</h2>
              <div className="divider"></div>

              <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.</p>
              <p>At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren.</p>
              <a href="about.html" className="btn btn-primary mt-3">Read More</a>
            </div>
            <div className="col-lg-6 py-3 wow fadeInRight">
              <div className="img-fluid py-3 text-center">
                <img src="/img/about_frame.png" alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="page-section bg-light">
        <div className="container">
          <div className="text-center wow fadeInUp">
            <div className="subhead">Our services</div>
            <h2 className="title-section">How SEO Team Can Help</h2>
            <div className="divider mx-auto"></div>
          </div>

          <div className="row">
            <div className="col-sm-6 col-lg-4 col-xl-3 py-3 wow zoomIn">
              <div className="features">
                <div className="header mb-3">
                  <span className="mai-business"></span>
                </div>
                <h5>OnSite SEO</h5>
                <p>We analyse your website's structure, internal architecture & other key</p>
              </div>
            </div>
            <div className="col-sm-6 col-lg-4 col-xl-3 py-3 wow zoomIn">
              <div className="features">
                <div className="header mb-3">
                  <span className="mai-business"></span>
                </div>
                <h5>OnSite SEO</h5>
                <p>We analyse your website's structure, internal architecture & other key</p>
              </div>
            </div>
            <div className="col-sm-6 col-lg-4 col-xl-3 py-3 wow zoomIn">
              <div className="features">
                <div className="header mb-3">
                  <span className="mai-business"></span>
                </div>
                <h5>OnSite SEO</h5>
                <p>We analyse your website's structure, internal architecture & other key</p>
              </div>
            </div>
            <div className="col-sm-6 col-lg-4 col-xl-3 py-3 wow zoomIn">
              <div className="features">
                <div className="header mb-3">
                  <span className="mai-business"></span>
                </div>
                <h5>OnSite SEO</h5>
                <p>We analyse your website's structure, internal architecture & other key</p>
              </div>
            </div>
            <div className="col-sm-6 col-lg-4 col-xl-3 py-3 wow zoomIn">
              <div className="features">
                <div className="header mb-3">
                  <span className="mai-business"></span>
                </div>
                <h5>OnSite SEO</h5>
                <p>We analyse your website's structure, internal architecture & other key</p>
              </div>
            </div>
            <div className="col-sm-6 col-lg-4 col-xl-3 py-3 wow zoomIn">
              <div className="features">
                <div className="header mb-3">
                  <span className="mai-business"></span>
                </div>
                <h5>OnSite SEO</h5>
                <p>We analyse your website's structure, internal architecture & other key</p>
              </div>
            </div>
            <div className="col-sm-6 col-lg-4 col-xl-3 py-3 wow zoomIn">
              <div className="features">
                <div className="header mb-3">
                  <span className="mai-business"></span>
                </div>
                <h5>OnSite SEO</h5>
                <p>We analyse your website's structure, internal architecture & other key</p>
              </div>
            </div>
            <div className="col-sm-6 col-lg-4 col-xl-3 py-3 wow zoomIn">
              <div className="features">
                <div className="header mb-3">
                  <span className="mai-business"></span>
                </div>
                <h5>OnSite SEO</h5>
                <p>We analyse your website's structure, internal architecture & other key</p>
              </div>
            </div>
          </div>

        </div>
      </div>

      <div className="page-section banner-seo-check">
        <div className="wrap bg-image" style={{backgroundImage: 'url(/img/bg_pattern.svg)'}}>
          <div className="container text-center">
            <div className="row justify-content-center wow fadeInUp">
              <div className="col-lg-8">
                <h2 className="mb-4">Check your Website SEO</h2>
                <form action="#">
                  <input type="text" className="form-control" placeholder="E.g google.com" />
                  <button type ="submit" class ="btn btn-success">Check Now</button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="page-section">
        <div className="container">
          <div className="text-center wow fadeInUp">
            <div className="subhead">Pricing Plan</div>
            <h2 className="title-section">Choose plan the right for you</h2>
            <div className="divider mx-auto"></div>
          </div>
          <div className="row mt-5">
            <div className="col-lg-4 py-3 wow zoomIn">
              <div className="card-pricing">
                <div className="header">
                  <div className="pricing-type">Basic</div>
                  <div className="price">
                    <span className="dollar">$</span>
                    <h1>39<span className="suffix">.99</span></h1>
                  </div>
                  <h5>Per Month</h5>
                </div>
                <div className="body">
                  <p>25 Analytics <span className="suffix">Campaign</span></p>
                  <p>1,300 Change <span className="suffix">Keywords</span></p>
                  <p>Social Media <span className="suffix">Reviews</span></p>
                  <p>1 Free <span className="suffix">Optimization</span></p>
                  <p>24/7 <span className="suffix">Support</span></p>
                </div>
                <div className="footer">
                  <a href="#" className="btn btn-pricing btn-block">Subscribe</a>
                </div>
              </div>
            </div>

            <div className="col-lg-4 py-3 wow zoomIn">
              <div className="card-pricing marked">
                <div className="header">
                  <div className="pricing-type">Standar</div>
                  <div className="price">
                    <span className="dollar">$</span>
                    <h1>59<span className="suffix">.99</span></h1>
                  </div>
                  <h5>Per Month</h5>
                </div>
                <div className="body">
                  <p>25 Analytics <span className="suffix">Campaign</span></p>
                  <p>1,300 Change <span className="suffix">Keywords</span></p>
                  <p>Social Media <span className="suffix">Reviews</span></p>
                  <p>1 Free <span className="suffix">Optimization</span></p>
                  <p>24/7 <span className="suffix">Support</span></p>
                </div>
                <div className="footer">
                  <a href="#" className="btn btn-pricing btn-block">Subscribe</a>
                </div>
              </div>
            </div>

            <div className="col-lg-4 py-3 wow zoomIn">
              <div className="card-pricing">
                <div className="header">
                  <div className="pricing-type">Professional</div>
                  <div className="price">
                    <span className="dollar">$</span>
                    <h1>99<span className="suffix">.99</span></h1>
                  </div>
                  <h5>Per Month</h5>
                </div>
                <div className="body">
                  <p>25 Analytics <span className="suffix">Campaign</span></p>
                  <p>1,300 Change <span className="suffix">Keywords</span></p>
                  <p>Social Media <span className="suffix">Reviews</span></p>
                  <p>1 Free <span className="suffix">Optimization</span></p>
                  <p>24/7 <span className="suffix">Support</span></p>
                </div>
                <div className="footer">
                  <a href="#" className="btn btn-pricing btn-block">Subscribe</a>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>

      <div className="page-section banner-info">
        <div className="wrap bg-image" style={{backgroundImage: 'url(/img/bg_pattern.svg)'}}>
          <div className="container">
            <div className="row align-items-center">
              <div className="col-lg-6 py-3 pr-lg-5 wow fadeInUp">
                <h2 className="title-section">SEO to Improve Brand <br/> Visibility</h2>
                <div className="divider"></div>
                <p>We're an experienced and talented team of passionate consultants who breathe with search engine marketing.</p>

                <ul className="theme-list theme-list-light text-white">
                  <li>
                    <div className="h5">SEO Content Strategy</div>
                    <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor</p>
                  </li>
                  <li>
                    <div className="h5">B2B SEO</div>
                    <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor</p>
                  </li>
                </ul>
              </div>
              <div className="col-lg-6 py-3 wow fadeInRight">
                <div className="img-fluid text-center">
                  <img src="/img/banner_image_2.svg" alt="" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="page-section">
        <div className="container">
          <div className="text-center wow fadeInUp">
            <div className="subhead">Our Blog</div>
            <h2 className="title-section">Read Latest News</h2>
            <div className="divider mx-auto"></div>
          </div>

          <div className="row mt-5">
            <div className="col-lg-4 py-3 wow fadeInUp">
              <div className="card-blog">
                <div className="header">
                  <div className="post-thumb">
                    <img src="/img/blog/blog-1.jpg" alt="" />
                  </div>
                </div>
                <div className="body">
                  <h5 className="post-title"><a href="#">Source of Content Inspiration</a></h5>
                  <div className="post-date">Posted on <a href="#">27 Jan 2020</a></div>
                </div>
              </div>
            </div>

            <div className="col-lg-4 py-3 wow fadeInUp">
              <div className="card-blog">
                <div className="header">
                  <div className="post-thumb">
                    <img src="/img/blog/blog-2.jpg" alt="" />
                  </div>
                </div>
                <div className="body">
                  <h5 className="post-title"><a href="#">Source of Content Inspiration</a></h5>
                  <div className="post-date">Posted on <a href="#">27 Jan 2020</a></div>
                </div>
              </div>
            </div>

            <div className="col-lg-4 py-3 wow fadeInUp">
              <div className="card-blog">
                <div className="header">
                  <div className="post-thumb">
                    <img src="/img/blog/blog-3.jpg" alt="" />
                  </div>
                </div>
                <div className="body">
                  <h5 className="post-title"><a href="#">Source of Content Inspiration</a></h5>
                  <div className="post-date">Posted on <a href="#">27 Jan 2020</a></div>
                </div>
              </div>
            </div>

            <div className="col-12 mt-4 text-center wow fadeInUp">
              <a href="blog.html" className="btn btn-primary">View More</a>
            </div>
          </div>
        </div>
      </div>

      <footer className="page-footer bg-image" style={{backgroundImage: 'url(/img/world_pattern.svg)'}}>
        <div className="container">
          <div className="row mb-5">
            <div className="col-lg-3 py-3">
              <h3>SEOGram</h3>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero amet, repellendus eius blanditiis in iusto eligendi iure.</p>

              <div className="social-media-button">
                <a href="#"><span className="mai-logo-facebook-f"></span></a>
                <a href="#"><span className="mai-logo-twitter"></span></a>
                <a href="#"><span className="mai-logo-google-plus-g"></span></a>
                <a href="#"><span className="mai-logo-instagram"></span></a>
                <a href="#"><span className="mai-logo-youtube"></span></a>
              </div>
            </div>
            <div className="col-lg-3 py-3">
              <h5>Company</h5>
              <ul className="footer-menu">
                <li><a href="#">About Us</a></li>
                <li><a href="#">Career</a></li>
                <li><a href="#">Advertise</a></li>
                <li><a href="#">Terms of Service</a></li>
                <li><a href="#">Help & Support</a></li>
              </ul>
            </div>
            <div className="col-lg-3 py-3">
              <h5>Contact Us</h5>
              <p>203 Fake St. Mountain View, San Francisco, California, USA</p>
              <a href="#" className="footer-link">+00 1122 3344 5566</a>
              <a href="#" className="footer-link">seogram@temporary.com</a>
            </div>
            <div className="col-lg-3 py-3">
              <h5>Newsletter</h5>
              <p>Get updates, news or events on your mail.</p>
              <form action="#">
                <input type="text" className="form-control" placeholder="Enter your email.." />
                <button type ="submit" class ="btn btn-success btn-block mt-2">Subscribe</button>
              </form>
            </div>
          </div>

          <p className="text-center" id="copyright">Copyright &copy; 2020. This template design and develop by <a href="https://macodeid.com/" target="_blank">MACode ID</a></p>
        </div>
      </footer>
    </div>
  );
}

export default App;
