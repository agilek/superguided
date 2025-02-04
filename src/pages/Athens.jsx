import React from 'react';
import CityTemplate from '../components/CityTemplate';
import withTitle from '../utils/withTitle';

function Athens() {
  const planner = {
    name: 'Nikos Papadopoulos',
    photo: 'nikos-planner.jpg'
  };
  const getItineraryLink = '#tally-open=wbYAZL&tally-layout=modal&tally-width=800&tally-emoji-text=👋&tally-emoji-animation=wave&city=Athens';
  const tourGuideLink = 'https://gowithguide.com/s?city=athens';
  return <CityTemplate city="Athens" planner={planner} getItineraryLink={getItineraryLink} tourGuideLink={tourGuideLink} />;
}

export default withTitle(Athens, 'Athens');