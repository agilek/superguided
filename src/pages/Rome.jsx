import React from 'react';
import CityTemplate from '../components/CityTemplate';
import withTitle from '../utils/withTitle';

function Rome() {
  const planner = {
    name: 'Lucia Bianchi',
    photo: 'lucia-planner.jpg'
  };
  const getItineraryLink = '#tally-open=wbYAZL&tally-layout=modal&tally-width=800&tally-emoji-text=👋&tally-emoji-animation=wave&city=Rome';
  const tourGuideLink = 'https://gowithguide.com/s?city=rome';
  return <CityTemplate city="Rome" planner={planner} getItineraryLink={getItineraryLink} tourGuideLink={tourGuideLink} />;
}

export default withTitle(Rome, 'Rome');