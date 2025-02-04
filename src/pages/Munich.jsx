import React from 'react';
import CityTemplate from '../components/CityTemplate';
import withTitle from '../utils/withTitle';

function Munich() {
  const planner = {
    name: 'Klaus Wagner',
    photo: 'klaus-planner.jpg'
  };
  const getItineraryLink = '#tally-open=wbYAZL&tally-layout=modal&tally-width=800&tally-emoji-text=👋&tally-emoji-animation=wave&city=Munich';
  const tourGuideLink = 'https://gowithguide.com/s?city=munich';
  return <CityTemplate city="Munich" planner={planner} getItineraryLink={getItineraryLink} tourGuideLink={tourGuideLink} />;
}

export default withTitle(Munich, 'Munich');