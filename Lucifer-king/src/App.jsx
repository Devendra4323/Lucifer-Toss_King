import React, { useEffect } from 'react';
import ReactPixel from 'react-facebook-pixel'; 
import './App.css';
import lucifer from '../public/lucifer-king.jpeg';

function App() {
  const telegramMainLink = "https://t.me/+GPfdWnsvVK01OTll";
  const adminLink = "https://t.me/your_admin_username"; 

  useEffect(() => {
    if (ReactPixel && typeof ReactPixel.init === 'function') {
      ReactPixel.init('1682748616410619', {
        autoConfig: true,
        debug: false,
      });
      ReactPixel.pageView();
    } else {
      console.log("ReactPixel is still loading or not found");
    }
  }, []);

  const trackJoinClick = () => {
    if (window.fbq) {
      window.fbq('track', 'Lead', {
        content_name: 'Telegram Join',
      });
    } else {
      console.log("Meta Pixel (fbq) is not loaded yet.");
    }
  };

  return (
    <div className="landing-container">
      <div className="stadium-overlay"></div>
      <div className="vignette"></div>

      <main className="main-content">
        <div className="hero-section">
          <img src={lucifer} className='image' alt="Lucifer King" />
          <h1 className="main-title">LUCIFER</h1>
          <h2 className="sub-title">TOSS KING</h2>
          <div className="badge">🏆 #1 FANTASY PREDICTOR</div>
        </div>

        <div className="action-area">
          {/* FIXED: Added onClick={trackJoinClick} below */}
          <a 
            href={telegramMainLink} 
            target="_blank" 
            rel="noopener noreferrer" 
            className="btn-main"
            onClick={trackJoinClick}
          >
            JOIN TELEGRAM NOW
          </a>
          <a href={adminLink} target="_blank" rel="noopener noreferrer" className="btn-admin">
            MESSAGE ADMIN
          </a>
        </div>

        <div className="features-grid">
          <div className="feature-card">
            <span className="icon">📊</span>
            <h3>Expert Prediction</h3>
            <p>95% Accuracy in Toss & Match Analysis.</p>
          </div>
          <div className="feature-card">
            <span className="icon">⚡</span>
            <h3>Instant Updates</h3>
            <p>Real-time session and jackpot calls.</p>
          </div>
          <div className="feature-card">
            <span className="icon">🎧</span>
            <h3>24/7 Support</h3>
            <p>Direct access to the King's desk anytime.</p>
          </div>
        </div>

        <footer className="footer-note">
          Join 50K+ Winners Today • Free & Premium Access
        </footer>
      </main>
    </div>
  );
}

export default App;