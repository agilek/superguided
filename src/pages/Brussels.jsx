import React from 'react';
import CityTemplate from '../components/CityTemplate';
import withTitle from '../utils/withTitle';

function Brussels() {
  const planner = {
    name: 'Sophie Dubois',
    photo: 'sophie-planner.jpg'
  };
  const getItineraryLink = '#tally-open=wbYAZL&tally-layout=modal&tally-width=800&tally-emoji-text=👋&tally-emoji-animation=wave&city=Brussels';
  const tourGuideLink = 'https://gowithguide.com/s?city=brussels';
  return <CityTemplate city="Brussels" planner={planner} getItineraryLink={getItineraryLink} tourGuideLink={tourGuideLink} />;
}

export default withTitle(Brussels, 'Brussels');