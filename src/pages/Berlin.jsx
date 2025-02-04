import React from 'react';
import CityTemplate from '../components/CityTemplate';
import withTitle from '../utils/withTitle';

function Berlin() {
  const planner = {
    name: 'Hans Schmidt',
    photo: 'hans-planner.jpg'
  };
  const getItineraryLink = '#tally-open=wbYAZL&tally-layout=modal&tally-width=800&tally-emoji-text=👋&tally-emoji-animation=wave&city=Berlin';
  console.log('getItineraryLink:', getItineraryLink);
  const tourGuideLink = 'https://gowithguide.com/s?city=berlin';
  return <CityTemplate city="Berlin" planner={planner} getItineraryLink={getItineraryLink} tourGuideLink={tourGuideLink} />;
}

export default withTitle(Berlin, 'Berlin');