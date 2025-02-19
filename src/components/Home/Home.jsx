import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import './style.css';
import PurchasePage from '../House/PurchasePage';

const Home = () => {
  const [services, setServices] = useState([]);

  useEffect(() => {
    const fetchServices = async () => {
      try {
        const response = await axios.get('https://house-capital.vercel.app/api/services');
        setServices(response.data);
      } catch (error) {
        console.error('Error fetching services:', error);
      }
    };

    fetchServices();
  }, []); // Empty dependency array ensures this runs once on mount

  const openChatbot = () => {
    const chatbotWindow = window.open(
      'chat.html', 
      'ChatbotWindow', 
      'width=400,height=600,left=100,top=100,resizable=no,scrollbars=no'
    );

    if (!chatbotWindow) {
      alert("Popup blocked! Please allow popups for this website.");
    }
  };

  return (
    <div className="homepage">
      <header className="header">
        {/* Your header content here */}
      </header>

      <section className="hero">
        <h1>Welcome to Yours Real Capital</h1>
        <p>Your success starts here. Let's achieve your goals together.</p>
        <Link to="/contact-us">
          <button className="cta-button">Get Started</button>
        </Link>
      </section>

      <section id="about" className="section">
        <h2>About Us</h2>
        <p>We are a team of professionals committed to delivering the best solutions for our clients.</p>
      </section>

      <section id="AI" className="section">
        <PurchasePage />
      </section>

      <section id="services" className="section">
        <h2>Services</h2>
        <div className="services-container">
          <Link to="/property-management/property-maintenance" className="service-card">
            Property Management
          </Link>
          <Link to="/renting" className="service-card">
            Renting
          </Link>
          <Link to="/sale" className="service-card">
            Sale
          </Link>
        </div>
      </section>

      <section id="assistance" className="section">
        <h2>Assistance</h2>
        <div className="services-container">
          <Link to="/Assistance" className="service-card">
            Assistance
          </Link>
        </div>
      </section>

      <section id="purchase" className="section">
        <h2>Purchase</h2>
        <div className="services-container">
          <Link to="/purchase" className="service-card">
            Purchase
          </Link>
        </div>
      </section>

      <footer className="footer">
        <p>&copy; 2025 Your Company. All Rights Reserved.</p>
      </footer>

      <button className="chatbot-button" onClick={openChatbot}>
        💬 Chat with AI
      </button>
    </div>
  );
};

export default Home;
