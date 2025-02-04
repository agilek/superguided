import React from 'react';
import CityTemplate from '../components/CityTemplate';
import withTitle from '../utils/withTitle';

function Vienna() {
  const planner = {
    name: 'Stefan Müller',
    photo: 'stefan-planner.jpg'
  };
  const getItineraryLink = '#tally-open=wbYAZL&tally-layout=modal&tally-width=800&tally-emoji-text=👋&tally-emoji-animation=wave&city=Vienna';
  const tourGuideLink = 'https://gowithguide.com/s?city=vienna';
  return <CityTemplate city="Vienna" planner={planner} getItineraryLink={getItineraryLink} tourGuideLink={tourGuideLink} />;
}

export default withTitle(Vienna, 'Vienna');