import React from 'react';
import CityTemplate from '../components/CityTemplate';
import withTitle from '../utils/withTitle';

function Budapest() {
  const planner = {
    name: 'Anna Kovacs',
    photo: 'anna-planner.jpg'
  };
  const getItineraryLink = '#tally-open=wbYAZL&tally-layout=modal&tally-width=800&tally-emoji-text=👋&tally-emoji-animation=wave&city=Budapest';
  const tourGuideLink = 'https://gowithguide.com/s?city=budapest';
  return <CityTemplate city="Budapest" planner={planner} getItineraryLink={getItineraryLink} tourGuideLink={tourGuideLink} />;
}

export default withTitle(Budapest, 'Budapest');