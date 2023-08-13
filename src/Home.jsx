import React, { useState } from 'react';
import './home.css';
import { useNavigate } from 'react-router-dom';

const Home = () => {
  const navigate = useNavigate();
  const [selectedPlan, setSelectedPlan] = useState(null);
  const [confirmationMessage, setConfirmationMessage] = useState('');

  const handleRedirect = () => {
    navigate('/about');
  };

  const handlePlanSelection = (plan) => {
    setSelectedPlan(plan);
  };

  const handleGetStarted = () => {
    if (selectedPlan) {
      setConfirmationMessage(`You've selected the ${selectedPlan} plan. Click to proceed.`);
    } else {
      setConfirmationMessage('Please select a plan first.');
    }
  };

  return (
    <div className="landing-page">
      <div className="hero-section py-5">
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <h1>Introduce Your Product Quickly and Effectively</h1>
              <p>
                Experience a revolutionary product that seamlessly blends cutting-edge technology with elegant design. Whether at home, work, or on the go, its intuitive interface and robust performance redefine efficiency, while its durability and sophisticated aesthetics elevate your everyday experience. Embrace the future and unlock a new level of convenience and potential with this innovative solution.
              </p>
              <div className="d-flex">
                <button className="btn btn-primary me-2" onClick={handleRedirect}>Purchase UI Kit</button>
                <button className="btn btn-outline-secondary">Learn More</button>
              </div>
            </div>
            <div className="col-md-6">
              <img
                src='iphone2.jpg'
                alt="Product Showcase"
                className="img-fluid rounded float-start embed-responsive img-cover"
              />
            </div>
          </div>
        </div>
      </div>

      <div className="features-section py-5">
        <div className="container features-container">
          <h2 className="text-center mb-4">Key Features</h2>
          <div className="row">
           
            <div className="col-md-4">
              <img src="iphone6.jpg" alt="Feature 1" className="feature-image img-fluid mb-3" />
              <h3 className="text-center">Feature 1</h3>
              <p className="text-center">Discover the amazing capabilities of Feature 1.</p>
            </div>
            
            <div className="col-md-4">
              <img src="iphone8.jpg" alt="Feature 2" className="feature-image img-fluid mb-3" />
              <h3 className="text-center">Feature 2</h3>
              <p className="text-center">Experience the power of Feature 2 that enhances your workflow.</p>
            </div>
            
            
            <div className="col-md-4">
              <img src="iphone4.jpg" alt="Feature 3" className="feature-image img-fluid mb-3" />
              <h3 className="text-center">Feature 3</h3>
              <p className="text-center">Unlock new possibilities with Feature 3 and streamline your tasks.</p>
            </div>
          </div>
        </div>
      </div>

      <div className="pricing-section py-5">
        <div className="container">
          <h2 className="text-center mb-3 " id="pricing">A Price To Suit Everyone</h2>
          <p className='text-center mb-4 font-weight-normal'>Our product stands out by seamlessly integrating advanced technology with a user-friendly design. It empowers users to achieve more with its intuitive interface, robust performance, and sleek aesthetics. By choosing our product, you gain a competitive edge and elevate your capabilities, making it an essential investment for those seeking superior quality and modern innovation.</p>
            <br />
            <br />
          <div className="row ">
          
            <div className="col-md-4 mt-4 ">
              <div
                className={`pricing-card text-center ${selectedPlan === 'Basic Plan' ? 'selected' : ''}`}
                onMouseEnter={() => handlePlanSelection('Basic Plan')}
                onMouseLeave={() => handlePlanSelection(null)}
              >
                <h3>Basic Plan</h3>
                <p>Get started with the essentials.</p>
                <span className="price fs-3">$19/month</span>
                <button className="btn btn-primary" onClick={handleGetStarted}>Get Started</button>
              </div>
            </div>
          
            <div className="col-md-4">
              <div
                className={`pricing-card text-center ${selectedPlan === 'Pro Plan' ? 'selected' : ''}`}
                onMouseEnter={() => handlePlanSelection('Pro Plan')}
                onMouseLeave={() => handlePlanSelection(null)}
              >
                <h3>Pro Plan</h3>
                <p>Unlock advanced features for professionals.</p>
                <span className="price fs-3">$39/month</span>
                <button className="btn btn-primary" onClick={handleGetStarted}>Get Started</button>
              </div>
            </div>
            {/* Premium Plan */}
            <div className="col-md-4">
              <div
                className={`pricing-card text-center ${selectedPlan === 'Premium Plan' ? 'selected' : ''}`}
                onMouseEnter={() => handlePlanSelection('Premium Plan')}
                onMouseLeave={() => handlePlanSelection(null)}
              >
                <h3>Premium Plan</h3>
                <p>Experience the full potential of our product.</p>
                <span className="price fs-3">$59/month</span>
                <button className="btn btn-primary" onClick={handleGetStarted}>Get Started</button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container text-center mt-4">
        <p>{confirmationMessage}</p>
      </div>
    </div>
  );
};

export default Home;
