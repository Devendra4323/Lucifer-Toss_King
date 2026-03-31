import React from 'react';
import './App.css';
import lucifer from '../public/lucifer-king.jpeg';

function App() {
  const telegramMainLink = "https://t.me/+GPfdWnsvVK01OTll";
  const adminLink = "https://t.me/your_admin_username"; 

  // Simplified Tracking Function
  const trackLead = () => {
    if (window.fbq) {
      window.fbq('track', 'Lead');
    }
  };

  return (
    <div className="landing-container">
      <div className="stadium-overlay" />
      <div className="vignette" />

      <main className="main-content">
        <header className="hero-section">
          <img src={lucifer} className='image' alt="Lucifer King" />
          <h1 className="main-title">LUCIFER</h1>
          <h2 className="sub-title">TOSS KING</h2>
          <div className="badge">🏆 #1 FANTASY PREDICTOR</div>
        </header>

        <section className="action-area">
          <a href={telegramMainLink} target="_blank" rel="noreferrer" className="btn-main" onClick={trackLead}>
            JOIN TELEGRAM NOW
          </a>
          <a href={adminLink} target="_blank" rel="noreferrer" className="btn-admin">
            MESSAGE ADMIN
          </a>
        </section>

        <section className="features-grid">
          <Feature icon="📊" title="Expert Prediction" desc="95% Accuracy in Toss & Match Analysis." />
          <Feature icon="⚡" title="Instant Updates" desc="Real-time session and jackpot calls." />
          <Feature icon="🎧" title="24/7 Support" desc="Direct access to the King's desk anytime." />
        </section>

        <footer className="footer-note">
          Join 50K+ Winners Today • Free & Premium Access
        </footer>
      </main>
    </div>
  );
}

// Sub-component to keep the grid code clean
const Feature = ({ icon, title, desc }) => (
  <div className="feature-card">
    <span className="icon">{icon}</span>
    <h3>{title}</h3>
    <p>{desc}</p>
  </div>
);

export default App;