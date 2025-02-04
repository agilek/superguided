import React from 'react';
import CityTemplate from '../components/CityTemplate';
import withTitle from '../utils/withTitle';

function Warsaw() {
  const planner = {
    name: 'Marek Wojcik',
    photo: 'marek-planner.jpg'
  };
  const getItineraryLink = '#tally-open=wbYAZL&tally-layout=modal&tally-width=800&tally-emoji-text=👋&tally-emoji-animation=wave&city=Warsaw';
  const tourGuideLink = 'https://gowithguide.com/s?city=warsaw';
  return <CityTemplate city="Warsaw" planner={planner} getItineraryLink={getItineraryLink} tourGuideLink={tourGuideLink} />;
}

export default withTitle(Warsaw, 'Warsaw');