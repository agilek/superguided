import React from 'react';
import Footer from '../components/Footer';
import Contact from '../components/Contact';
import { Link } from 'react-router-dom';

const ScrollToTopLink = ({ to, children }) => {
  const handleClick = () => {
    window.scrollTo(0, 0);
  };

  return (
    <Link to={to} onClick={handleClick}>{children}</Link>
  );
};

function Home() {
  React.useEffect(() => {
    // Initialize scroller animation
    if (!window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      const scrollers = document.querySelectorAll(".scroller");
      scrollers.forEach(scroller => {
        scroller.setAttribute("data-animated", true);
        const scrollerInner = scroller.querySelector(".scroller__inner");
        Array.from(scrollerInner.children).forEach(child => {
          const clone = child.cloneNode(true);
          clone.setAttribute("aria-hidden", true);
          scrollerInner.appendChild(clone);
        });
      });
    }
  }, []);

  const scrollToTop = (e) => {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleLogoClick = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div>
      <div className="cards">
        <img src="/img/cards.png" alt="Itineraries" />
      </div>
      
      <section className="scroller" aria-hidden="true" data-direction="left" data-speed="slow">
        <div className="scroller__inner">
          <img src="/img/cards/card-01.png" alt="Itineraries" />
          <img src="/img/cards/card-02.png" alt="Itineraries" />
          <img src="/img/cards/card-03.png" alt="Itineraries" />
          <img src="/img/cards/card-04.png" alt="Itineraries" />
          <img src="/img/cards/card-05.png" alt="Itineraries" />
          <img src="/img/cards/card-06.png" alt="Itineraries" />
          <img src="/img/cards/card-07.png" alt="Itineraries" />
          <img src="/img/cards/card-01.png" alt="Itineraries" />
          <img src="/img/cards/card-02.png" alt="Itineraries" />
          <img src="/img/cards/card-03.png" alt="Itineraries" />
          <img src="/img/cards/card-04.png" alt="Itineraries" />
          <img src="/img/cards/card-05.png" alt="Itineraries" />
          <img src="/img/cards/card-06.png" alt="Itineraries" />
          <img src="/img/cards/card-07.png" alt="Itineraries" />
        </div>
      </section>
      <div className="svg-container">
          <img src="/img/arrow-hp.svg" alt="Arrow" className="arrow-svg" />
        </div>
      <div className="container">
        <section className="hero">
          <div className="hero-text">
            <h1>Get a <span className="highlight">personalized</span> itinerary for&nbsp;your city adventure</h1>
            <p>Ditch the hassle of planning. Let our local experts design a personalized city itinerary just for you—saving you time, stress, and the risk of bad choices!</p>
          </div>
        </section>

        <section className="benefits-detail">
          <div className="benefit">
            <span className="number">01</span>
            <p className="handwritten">Personalized to your needs</p>
          </div>
          <div className="divider"><img src="/img/divider-2.svg" alt="Divider" /></div>
          <div className="benefit">
            <span className="number">02</span>
            <p className="handwritten">Crafted by real planners, no AI</p>
          </div>
          <div className="divider"><img src="/img/divider-3.svg" alt="Divider" /></div>
          <div className="benefit">
            <span className="number">03</span>
            <p className="handwritten">All the most popular European cities</p>
          </div>
        </section>

        <section className="hero hp">
          <div className="hero-text hp">
            <h2>Where are you going?</h2>
            <p className="cities-main">
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
        </section>

        <section className="testimonials hp">
          <div className="faq-header">
            <h2>See why people love our itineraries...</h2>
            <p>In a nutshell: Hassle-free travel planning, great tips, local recommendations and lots of fun!</p>
          </div>
          <div className="testimonial-cards">
            <div className="testimonial-card">
              <div className="quote-mark"><img src="/img/quotation-mark-1.svg" alt="Quotation Mark" /></div>
              <p className="testimonial-text">I was so overwhelmed trying to plan our Barcelona trip, but Mike made it incredibly easy! He created a personalized itinerary that perfectly balanced sightseeing, food tours, and even some hidden gems we never would have found on our own. We had the best time in Barça!</p>
              <div className="author">
                <h3>Sarah and John K.</h3>
                <p>London, UK</p>
              </div>
            </div>
            <div className="testimonial-card">
              <div className="quote-mark"><img src="/img/quotation-mark-2.svg" alt="Quotation Mark" /></div>
              <p className="testimonial-text">As a solo traveler, I was a bit apprehensive about planning my Rome trip. But this itinerary gave me the perfect mix of structure and flexibility. I felt confident exploring on my own, and I knew I was getting the most out of my time in the city. Thanks for a fantastic experience!</p>
              <div className="author">
                <h3>David W.</h3>
                <p>New York, USA</p>
              </div>
            </div>
            <div className="testimonial-card">
              <div className="quote-mark"><img src="/img/quotation-mark-3.svg" alt="Quotation Mark" /></div>
              <p className="testimonial-text">We only had a few days in Prague, and this itinerary ensured we didn't waste a minute. He even included tips on how to navigate the city and avoid crowds. We saw all the must-sees, but also had time to relax and soak up the atmosphere. Brilliant!</p>
              <div className="author">
                <h3>Lisa B. and James P.</h3>
                <p>Sydney, Australia</p>
              </div>
            </div>
          </div>
        </section>

        <Contact />

        <Footer />
      </div>
      <div className="logo-float" onClick={scrollToTop}>
        <img src="/img/logo-superguided.svg" className="logo-float" alt="logo" />
      </div>
    </div>
  );
}

export default Home;