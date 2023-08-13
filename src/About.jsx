import React from 'react';
const About = () => {
  return (
    <div className="about-page">
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <img
              src="company.jpg"
              alt="Company Logo"
              className="img-fluid rounded float-start embed-responsive img-cover"
            />
          </div>
          <div className="col-md-6">
            <h2>About Our Company</h2>
            <p>
              At Our Company, we are dedicated to delivering innovative solutions that
              transform the way you [describe your product's purpose or benefits].
            </p>
            <p>
              With a passion for excellence and a commitment to pushing the boundaries of
              technology, we have established ourselves as a leader in the industry.
            </p>
          </div>
        </div>

        <div className="row mt-5">
          <div className="col-md-6">
            <h2>Our Mission</h2>
            <p>
              Our mission is to Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nulla, corrupti, blanditiis vel debitis magnam enim accusantium illum similique delectus quaerat saepe facilis porro sapiente natus veniam facere nisi veritatis aut. 
            </p>
            <p>
              We strive to create products that seamlessly integrate innovation and usability,
              enhancing the lives of our customers and driving positive change in the world.
            </p>
          </div>
          <div className="col-md-6">
            <img
              src="iphone5.jpg"
              alt="Product Image"
              className="img-fluid rounded float-start embed-responsive img-cover"
            />
          </div>
        </div>

        <div className="row mt-5">
          <div className="col-md-12">
            <h2>Key Features</h2>
            <ul>
              <li>Feature 1: </li>
              <li>Feature 2:</li>
              <li>Feature 3: </li>
             
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
