import React from 'react';
import { Link } from 'react-router-dom';

const ScrollToTopLink = ({ to, children }) => {
  const handleClick = () => {
    window.scrollTo(0, 0);
  };

  return (
    <Link to={to} onClick={handleClick}>{children}</Link>
  );
};

function Footer() {
  return (
    <footer>
      <hr className="svg-divider" />
      <div className="footer-content">
        <div className="logo">
          <div className="logo-icon">
            <ScrollToTopLink to="/"><img src="/img/logo-superguided.svg" alt="SuperGuided Logo" className="logo" /></ScrollToTopLink>
          </div>
          <div className="logo-text">
            <ScrollToTopLink to="/"><img src="/img/logo-superguided-full.svg" alt="SuperGuided Logo" className="logo" /></ScrollToTopLink>
          </div>
        </div>
        <p className="footer-text">Get personalized itineraries for beautiful cities in Europe.</p>
        <p className="cities">
          <ScrollToTopLink to="/amsterdam">Amsterdam</ScrollToTopLink>,{' '}
          <ScrollToTopLink to="/athens">Athens</ScrollToTopLink>,{' '}
          <ScrollToTopLink to="/barcelona">Barcelona</ScrollToTopLink>,{' '}
          <ScrollToTopLink to="/bergen">Bergen</ScrollToTopLink>,{' '}
          <ScrollToTopLink to="/berlin">Berlin</ScrollToTopLink>,{' '}
          <ScrollToTopLink to="/bilbao">Bilbao</ScrollToTopLink>,{' '}
          <ScrollToTopLink to="/bratislava">Bratislava</ScrollToTopLink>,{' '}
          <ScrollToTopLink to="/brussels">Brussels</ScrollToTopLink>,{' '}
          <ScrollToTopLink to="/budapest">Budapest</ScrollToTopLink>,{' '}
          <ScrollToTopLink to="/copenhagen">Copenhagen</ScrollToTopLink>,{' '}
          <ScrollToTopLink to="/dublin">Dublin</ScrollToTopLink>,{' '}
          <ScrollToTopLink to="/dubrovnik">Dubrovnik</ScrollToTopLink>,{' '}
          <ScrollToTopLink to="/edinburgh">Edinburgh</ScrollToTopLink>,{' '}
          <ScrollToTopLink to="/florence">Florence</ScrollToTopLink>,{' '}
          <ScrollToTopLink to="/geneva">Geneva</ScrollToTopLink>,{' '}
          <ScrollToTopLink to="/glasgow">Glasgow</ScrollToTopLink>,{' '}
          <ScrollToTopLink to="/hamburg">Hamburg</ScrollToTopLink>,{' '}
          <ScrollToTopLink to="/helsinki">Helsinki</ScrollToTopLink>,{' '}
          <ScrollToTopLink to="/istanbul">Istanbul</ScrollToTopLink>,{' '}
          <ScrollToTopLink to="/krakow">Krakow</ScrollToTopLink>,{' '}
          <ScrollToTopLink to="/lille">Lille</ScrollToTopLink>,{' '}
          <ScrollToTopLink to="/london">London</ScrollToTopLink>,{' '}
          <ScrollToTopLink to="/madrid">Madrid</ScrollToTopLink>,{' '}
          <ScrollToTopLink to="/milan">Milan</ScrollToTopLink>,{' '}
          <ScrollToTopLink to="/munich">Munich</ScrollToTopLink>,{' '}
          <ScrollToTopLink to="/paris">Paris</ScrollToTopLink>,{' '}
          <ScrollToTopLink to="/prague">Prague</ScrollToTopLink>,{' '}
          <ScrollToTopLink to="/reykjavik">Reykjavik</ScrollToTopLink>,{' '}
          <ScrollToTopLink to="/rome">Rome</ScrollToTopLink>,{' '}
          <ScrollToTopLink to="/stockholm">Stockholm</ScrollToTopLink>,{' '}
          <ScrollToTopLink to="/venice">Venice</ScrollToTopLink>,{' '}
          <ScrollToTopLink to="/vienna">Vienna</ScrollToTopLink>,{' '}
          <ScrollToTopLink to="/warsaw">Warsaw</ScrollToTopLink>,{' '}
          <ScrollToTopLink to="/zurich">Zurich</ScrollToTopLink>
        </p>
      </div>
      <div className="empty"></div>
      <hr className="svg-divider" />
      <span className="footer-credits">
        <span className="text-cover">That's all, that's it! © SuperGuided.</span>
        <br />
        <span className="message">Be kind 🥰, respect each other 🧡 & travel a lot 🌍</span>
      </span>
    </footer>
  );
}

export default Footer;