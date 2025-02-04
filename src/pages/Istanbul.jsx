import React from 'react';
import CityTemplate from '../components/CityTemplate';
import withTitle from '../utils/withTitle';

function Istanbul() {
  const planner = {
    name: 'Mehmet Yilmaz',
    photo: 'mehmet-planner.jpg'
  };
  const getItineraryLink = '#tally-open=wbYAZL&tally-layout=modal&tally-width=800&tally-emoji-text=👋&tally-emoji-animation=wave&city=Istanbul';
  const tourGuideLink = 'https://gowithguide.com/s?city=istanbul';
  return <CityTemplate city="Istanbul" planner={planner} getItineraryLink={getItineraryLink} tourGuideLink={tourGuideLink} />;
}

export default withTitle(Istanbul, 'Istanbul');