import React from 'react';


const Contact = () => {
  return (
    <div className="contact-page">
      <div className="container">
        <div className="row">
          <div className="col-md-6 mx-auto">
            <h2>Contact Us</h2>
            <p>We'd love to hear from you! Fill out the form below to get in touch.</p>
            <form>
              <div className="mb-3">
                <label htmlFor="name" className="form-label">
                  Name
                </label>
                <input type="text" className="form-control" id="name" name="name" required />
              </div>
              <div className="mb-3">
                <label htmlFor="email" className="form-label">
                  Email
                </label>
                <input type="email" className="form-control" id="email" name="email" required />
              </div>
              <div className="mb-3">
                <label htmlFor="message" className="form-label">
                  Message
                </label>
                <textarea className="form-control" id="message" name="message" rows="5" required></textarea>
              </div>
              <button type="submit" className="btn btn-primary">
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
