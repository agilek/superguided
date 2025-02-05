import React from 'react';
import Footer from './Footer';
import Contact from './Contact';
import { useNavigate } from 'react-router-dom';

function CityTemplate({ city, planner, getItineraryLink, tourGuideLink }) {
  const navigate = useNavigate();

  React.useEffect(() => {
    // FAQ Accordion functionality
    const faqButtons = document.querySelectorAll('.faq-question');
    faqButtons.forEach(button => {
      button.onclick = function() {
        const faqItem = this.parentElement;
        const isActive = faqItem.classList.contains('active');
        document.querySelectorAll('.faq-item').forEach(item => {
          item.classList.remove('active');
        });
        if (!isActive) {
          faqItem.classList.add('active');
        }
      };
    });
  }, []);

  const scrollToTop = (e) => {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const goToHome = () => {
    // Scroll to top instantly first
    window.scrollTo(0, 0);
    // Then navigate
    navigate('/');
  };

  return (
    <div className="container">
      <section className="intro">
        <div className="intro-placeholder">
          <div className="intro-images">
            <div className="image-overlay"></div>
            <img src={`/img/city/${city.toLowerCase()}/intro.jpg`} alt={`${city} Intro`} className="intro-image" />
          </div>
        </div>     
        <div className="intro-content">
        <div className="intro-title-container">
          <div className="intro-title">
            Get a <span className="highlight">personalized</span> itinerary for your trip to {city}.
          </div>

          </div>
          <div className="intro-description"><span class="inline">
            Forget the stress and hours of planning and experience <strong>a&nbsp;truly authentic {city} adventure</strong>, tailored to your interests and time constraints.</span>
          </div>
          <div className="empty"></div>
          <div className="empty"></div>
          <a href={getItineraryLink}><button className="button button--mimas"><span>Get your itinerary</span></button></a>
        </div>
      </section>

      <section className="benefits-detail">
        <div className="benefit">
          <span className="number">01</span>
          <p className="handwritten">Only the best from {city}</p>
        </div>
        <div className="divider"><img src="/img/divider-2.svg" alt="Divider" /></div>
        <div className="benefit">
          <span className="number">02</span>
          <p className="handwritten">Personalized to your needs</p>
        </div>
        <div className="divider"><img src="/img/divider-3.svg" alt="Divider" /></div>
        <div className="benefit">
          <span className="number">03</span>
          <p className="handwritten">Crafted by real planners, no AI</p>
        </div>
      </section>

      <hr className="svg-divider" />

      <section className="why">
        <div className="why-container">
          <div className="why-content">
            <div className="why-text">
              <div className="why-header">
                <h2>Escape to {city} with a unique itinerary designed just for you by a&nbsp;local expert</h2>
                <p>Planning a trip can be overwhelming, but it doesn't have to be! Imagine...</p>
              </div>
              
              <div className="why-benefits">
                <div className="why-benefit-item">
                  <div className="benefit-icon green">
                    <img src="/img/bullet-x.svg" alt="Bullet point" />
                  </div>
                  <p><span className="text-wrapper">Worry-free adventure:</span> Enjoy every moment in {city} knowing your trip is perfectly organized. No more stressful decisions, just pure enjoyment.</p>
                </div>
                
                <div className="why-benefit-item">
                  <div className="benefit-icon purple">
                    <img src="/img/bullet-x.svg" alt="Bullet point" />
                  </div>
                  <p><span className="text-wrapper">Experiencing authentic {city}:</span> Discover charming local spots, vibrant markets, and hidden corners you'd never find on your own.</p>
                </div>
                
                <div className="why-benefit-item">
                  <div className="benefit-icon orange">
                    <img src="/img/bullet-x.svg" alt="Bullet point" />
                  </div>
                  <p><span className="text-wrapper">And it's unique to you:</span> The itinerary crafted just for you by {city} expert is filled with unforgettable experiences.</p>
                </div>
              </div>
            </div>
            
            <div className="why-images">
              <div className="image-column">
                <div className="image-card tall"><div className="image-overlay"></div>
                  <img src={`/img/city/${city.toLowerCase()}/image-1.jpg`} alt={`${city} Image 1`} />
                </div>
                <div className="image-card"><div className="image-overlay"></div>
                  <img src={`/img/city/${city.toLowerCase()}/image-3.jpg`} alt={`${city} Image 3`} />
                </div>
              </div>
              <div className="image-column">
                <div className="image-card"><div className="image-overlay"></div>
                  <img src={`/img/city/${city.toLowerCase()}/image-2.jpg`} alt={`${city} Image 2`} />
                </div>
                <div className="image-card tall"><div className="image-overlay"></div>
                  <img src={`/img/city/${city.toLowerCase()}/image-4.jpg`} alt={`${city} Image 4`} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="quotation">
        <div className="quotation-container">
          <div className="quote-card">
            <div className="quote-avatar">
              <img src={`/img/city/${city.toLowerCase()}/${planner.photo}`} alt={planner.name} />
            </div>
            <div className="quote-content">
              <p className="quote-text">Hi, I'm {planner.name} 👋 and I help travelers experience authentic {city} through personalized itineraries. With years of experience, I've been guiding people through this beautiful city. You'll discover the city's hidden gems and iconic landmarks. I'll ensure you discover the city's hidden gems and iconic landmarks. Tell me your travel style, and let's create your dream trip together!</p>
              <div className="quote-author">
                <h3>{planner.name}</h3>
                <p>Travel Planner for {city}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="contents">
        <div className="contents-container">
          <div className="contents-header">
            <h2>What will you get?</h2>
            <p>For one price, you're getting <strong>more than just an itinerary</strong> for your trip. We want you to make your trip as smooth as possible.</p>
          </div>
          
          <div className="contents-grid">
            <div className="content-card-2">
              <div className="card-image-2">
                <img src={`/img/city/${city.toLowerCase()}/s-itinerary.png`} alt="Personalized Itinerary" />
              </div>
              <div className="card-content">
                <h3><span>1</span> Personalized itinerary</h3>
                <p>A fully tailored plan designed around your preferences, ensuring you see the sights and enjoy experiences that matter most to you. <a href="/img/sample-itinerary.png" target="_blank">See sample</a></p>
              </div>
            </div>

            <div className="content-card-2">
              <div className="card-image-2">
                <img src={`/img/city/${city.toLowerCase()}/s-map.png`} alt="Interactive map" />
              </div>
              <div className="card-content">
                <h3><span>2</span> Interactive map</h3>
                <p>Easy to follow interactive map where you can see everything from your plan: the sights, attractions, viewpoints or restaurants and cafés.</p>
              </div>
            </div>

            <div className="content-card-2">
              <div className="card-image-2">
                <img src={`/img/city/${city.toLowerCase()}/s-live-support.png`} alt="Live support" />
              </div>
              <div className="card-content">
                <h3><span>3</span> Live support</h3>
                <p>With our WhatsApp live support you can always travel worry-free: our assistance is always just a message away when you need help.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <hr className="svg-divider" />

      <section className="pricing">
        <div className="pricing-container">
          <div className="pricing-header">
            <h2>Get itinerary for peace of mind</h2>
            <p>Choose how many days you plan to stay in the city</p>
          </div>
          
          <div className="pricing-options">
            <div className="pricing-card">
              <div className="card-info">
                <div className="card-text">
                  <h3><span>2 days</span> in {city}</h3>
                  <p>Maximize your short trip by hitting the must-see highlights with efficient routes and time-saving tips.</p>
                </div>
                <span className="price">€29,99</span>
              </div>
              <a href={getItineraryLink}><button className="button button--mimas"><span>Get itinerary</span></button></a>
            </div>

            <div className="pricing-card">
              <div className="card-info">
                <div className="card-text">
                  <h3><span>3 days</span> in {city}</h3>
                  <p>Experience a balanced mix of iconic sights and hidden gems. You'll see the main attractions but also wander through charming local streets.</p>
                </div>
                <span className="price">€39,99</span>
              </div>
              <a href={getItineraryLink}><button className="button button--mimas"><span>Get itinerary</span></button></a>
            </div>

            <div className="pricing-card">
              <div className="card-info">
                <div className="card-text">
                  <h3><span>4 days</span> in {city}</h3>
                  <p>Explore the city at a more relaxed pace, with time for deeper dives into its diverse neighborhoods.</p>
                </div>
                <span className="price">€49,99</span>
              </div>
              <a href={getItineraryLink}><button className="button button--mimas"><span>Get itinerary</span></button></a>
            </div>

            <div className="pricing-card">
              <div className="card-info">
                <div className="card-text">
                  <h3><span>5 days</span> in {city}</h3>
                  <p>Immerse yourself in {city}'s magic, with enough time to discover its hidden corners and enjoy its vibrant culture.</p>
                </div>
                <span className="price">€59,99</span>
              </div>
              <a href={getItineraryLink}><button className="button button--mimas"><span>Get itinerary</span></button></a>
            </div>

            <div className="guide-card">
              <div className="card-info">
                <div className="card-text">
                  <h3><span>Hire a private tour guide</span></h3>
                  <p>Would you rather hire a professional tour guide for {city} that will show you around the city?</p>
                </div>
                <span className="price">From €99/day</span>
              </div>
              <a href={tourGuideLink}><button className="button button--nomas"><span>Hire a tour guide</span></button></a>
            </div>
          </div>
        </div>
      </section>

      <hr className="svg-divider" />

      <section className="testimonials">
        <div className="faq-header">
          <h2>See why people love our itineraries...</h2>
          <p>In a nutshell: Hassle-free travel planning, great tips, local recommendations and lots of fun!</p>
        </div>
        <div className="testimonial-cards">
          <div className="testimonial-card">
            <div className="quote-mark"><img src="/img/quotation-mark-1.svg" alt="Quotation Mark" /></div>
            <p className="testimonial-text">The personalized itinerary for {city} was exactly what we needed! It perfectly balanced sightseeing with local experiences, and included some hidden gems we never would have found on our own.</p>
            <div className="author">
              <h3>Sarah and John K.</h3>
              <p>London, UK</p>
            </div>
          </div>
          <div className="testimonial-card">
            <div className="quote-mark"><img src="/img/quotation-mark-2.svg" alt="Quotation Mark" /></div>
            <p className="testimonial-text">As a solo traveler, I was a bit apprehensive about planning my {city} trip. But this itinerary gave me the perfect mix of structure and flexibility. I felt confident exploring on my own!</p>
            <div className="author">
              <h3>David W.</h3>
              <p>New York, USA</p>
            </div>
          </div>
          <div className="testimonial-card">
            <div className="quote-mark"><img src="/img/quotation-mark-3.svg" alt="Quotation Mark" /></div>
            <p className="testimonial-text">We only had a few days in {city}, and this itinerary ensured we didn't waste a minute. The tips on how to avoid crowds and navigate the city were invaluable!</p>
            <div className="author">
              <h3>Lisa B. and James P.</h3>
              <p>Sydney, Australia</p>
            </div>
          </div>
        </div>
      </section>

      <hr className="svg-divider" />

      <section className="faq">
        <div className="faq-container">
          <div className="faq-header">
            <h2>Questions you might ask</h2>
            <p>Still not sure about your personalized {city} itinerary?</p>
          </div>
          
          <div className="faq-list">
            <div className="faq-item">
              <button className="faq-question">
                <span>Why should I use a travel planner instead of planning the trip myself?</span>
                <div className="circle-button">
                  <i className="icon-plus"></i>
                </div>
              </button>
              <div className="faq-answer">
                <p>Planning a trip to {city} should be exciting, not exhausting! But let's face it, researching destinations, booking hotels, and creating a perfect itinerary can quickly become overwhelming.</p>
                <p>That's where a travel planner comes in. We'll handle all the time-consuming logistics, so you can focus on enjoying your trip. We'll curate a personalized itinerary filled with unique experiences you might miss on your own.</p>
                <p>Think of it as an investment in stress-free travel and unforgettable memories. You deserve a vacation where you can truly relax and explore, and I can help make that happen.</p>
              </div>
            </div>

            <div className="faq-item">
              <button className="faq-question">
                <span>What makes your itineraries special?</span>
                <div className="circle-button">
                  <i className="icon-plus"></i>
                </div>
              </button>
              <div className="faq-answer">
                <p>While today's technology full of AI offers generic travel plans, our itineraries are crafted with years of firsthand experience in {city}. We don't rely on algorithms or online articles; we leverage our deep knowledge of the city to curate unique experiences.</p>
                <p>Our personalized itineraries go beyond the typical tourist route, offering hidden gems, local insights, and tailored recommendations. You'll discover authentic {city}, from its charming neighborhoods to its culinary delights.</p>
              </div>
            </div>

            <div className="faq-item">
              <button className="faq-question">
                <span>How do you personalize the itinerary to my needs?</span>
                <div className="circle-button">
                  <i className="icon-plus"></i>
                </div>
              </button>
              <div className="faq-answer">
                <p>Your unique preferences are at the heart of our service. We start with a detailed questionnaire to understand your interests, budget, and travel style. With this information, we craft a custom itinerary that perfectly aligns with your vision, ensuring a truly unforgettable {city} experience.</p>
              </div>
            </div>

            <div className="faq-item">
              <button className="faq-question">
                <span>What is (and isn't) included in my personalized itinerary?</span>
                <div className="circle-button">
                  <i className="icon-plus"></i>
                </div>
              </button>
              <div className="faq-answer">
                <h4>Here's what you get:</h4>
                <ul>
                  <li><b>A personalized itinerary:</b> Crafted just for you based on your travel dates, interests, and budget. It includes detailed daily plans with sightseeing recommendations, transportation tips, and estimated costs.</li>
                  <li><b>Accommodation suggestions:</b> We'll provide options that fit your needs and budget, whether you're looking for a boutique hotel, a cozy guesthouse, or a stylish apartment.</li>
                  <li><b>An interactive map:</b> Easily visualize your itinerary with an interactive map that pinpoints all the attractions, restaurants, and activities.</li>
                  <li><b>Booking links:</b> We'll provide direct links for booking tickets to attractions and tours, saving you time and hassle.</li>
                  <li><b>Support throughout your trip:</b> We're available via WhatsApp for any questions or assistance you may need while in {city}.</li>
                </ul>
                <p>Essentially, you get everything you will need, <b>except for</b> any bookings or reservations made on your behalf. This includes flights, accommodation, attractions, and restaurants.</p>
              </div>
            </div>

            <div className="faq-item">
              <button className="faq-question">
                <span>How long does it take to receive my personalized itinerary?</span>
                <div className="circle-button">
                  <i className="icon-plus"></i>
                </div>
              </button>
              <div className="faq-answer">
                <p>Usually it takes <b>2-3 business days</b> to get your itinerary since the order is placed and paid.</p>
              </div>
            </div>

            <div className="faq-item">
              <button className="faq-question">
                <span>What is the format of the itinerary?</span>
                <div className="circle-button">
                  <i className="icon-plus"></i>
                </div>
              </button>
              <div className="faq-answer">
                <p>Your itinerary will be delivered to your email as a <b>convenient PDF</b>. Access it on your phone, tablet, computer, or e-reader. You can also print it out for easy reference. Best of all, the itinerary works offline, so you don't need an internet connection to use it!</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Contact />

      <Footer />
      <div className="logo-float" onClick={goToHome}>
        <img src="/img/logo-superguided.svg" className="logo-float" alt="logo" />
      </div>
    </div>
  );
}

export default CityTemplate;