import React from 'react';
import CityTemplate from '../components/CityTemplate';
import withTitle from '../utils/withTitle';

function Dublin() {
  const planner = {
    name: 'Sean O\'Connor',
    photo: 'sean-planner.jpg'
  };
  const getItineraryLink = '#tally-open=wbYAZL&tally-layout=modal&tally-width=800&tally-emoji-text=👋&tally-emoji-animation=wave&city=Dublin';
  const tourGuideLink = 'https://gowithguide.com/s?city=dublin';
  return <CityTemplate city="Dublin" planner={planner} getItineraryLink={getItineraryLink} tourGuideLink={tourGuideLink} />;
}

export default withTitle(Dublin, 'Dublin');