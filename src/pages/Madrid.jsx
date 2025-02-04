import React from 'react';
import CityTemplate from '../components/CityTemplate';
import withTitle from '../utils/withTitle';

function Madrid() {
  const planner = {
    name: 'Elena Rodriguez',
    photo: 'elena-planner.jpg'
  };
  const getItineraryLink = '#tally-open=wbYAZL&tally-layout=modal&tally-width=800&tally-emoji-text=👋&tally-emoji-animation=wave&city=Madrid';
  const tourGuideLink = 'https://gowithguide.com/s?city=madrid';
  return <CityTemplate city="Madrid" planner={planner} getItineraryLink={getItineraryLink} tourGuideLink={tourGuideLink} />;
}

export default withTitle(Madrid, 'Madrid');