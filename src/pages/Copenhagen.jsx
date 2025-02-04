import React from 'react';
import CityTemplate from '../components/CityTemplate';
import withTitle from '../utils/withTitle';

function Copenhagen() {
  const planner = {
    name: 'Lars Nielsen',
    photo: 'lars-planner.jpg'
  };
  const getItineraryLink = '#tally-open=wbYAZL&tally-layout=modal&tally-width=800&tally-emoji-text=👋&tally-emoji-animation=wave&city=Copenhagen';
  const tourGuideLink = 'https://gowithguide.com/s?city=copenhagen';
  return <CityTemplate city="Copenhagen" planner={planner} getItineraryLink={getItineraryLink} tourGuideLink={tourGuideLink} />;
}

export default withTitle(Copenhagen, 'Copenhagen');