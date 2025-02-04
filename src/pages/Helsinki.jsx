import React from 'react';
import CityTemplate from '../components/CityTemplate';
import withTitle from '../utils/withTitle';

function Helsinki() {
  const planner = {
    name: 'Mikko Virtanen',
    photo: 'mikko-planner.jpg'
  };
  const getItineraryLink = '#tally-open=wbYAZL&tally-layout=modal&tally-width=800&tally-emoji-text=👋&tally-emoji-animation=wave&city=Helsinki';
  const tourGuideLink = 'https://gowithguide.com/s?city=helsinki';
  return <CityTemplate city="Helsinki" planner={planner} getItineraryLink={getItineraryLink} tourGuideLink={tourGuideLink} />;
}

export default withTitle(Helsinki, 'Helsinki');