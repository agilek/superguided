import React from 'react';
import CityTemplate from '../components/CityTemplate';
import withTitle from '../utils/withTitle';

function Paris() {
  const planner = {
    name: 'Sophie Martin',
    photo: 'sophie-martin-planner.jpg'
  };
  const getItineraryLink = '#tally-open=wbYAZL&tally-layout=modal&tally-width=800&tally-emoji-text=👋&tally-emoji-animation=wave&city=Paris';
  const tourGuideLink = 'https://gowithguide.com/s?city=paris';
  return <CityTemplate city="Paris" planner={planner} getItineraryLink={getItineraryLink} tourGuideLink={tourGuideLink} />;
}

export default withTitle(Paris, 'Paris');