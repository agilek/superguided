import React from 'react';
import CityTemplate from '../components/CityTemplate';
import withTitle from '../utils/withTitle';

function Venice() {
  const planner = {
    name: 'Isabella Ferrari',
    photo: 'isabella-planner.jpg'
  };
  const getItineraryLink = '#tally-open=wbYAZL&tally-layout=modal&tally-width=800&tally-emoji-text=👋&tally-emoji-animation=wave&city=Venice';
  const tourGuideLink = 'https://gowithguide.com/s?city=venice';
  return <CityTemplate city="Venice" planner={planner} getItineraryLink={getItineraryLink} tourGuideLink={tourGuideLink} />;
}

export default withTitle(Venice, 'Venice');