import React from 'react';
import CityTemplate from '../components/CityTemplate';
import withTitle from '../utils/withTitle';

function Geneva() {
  const planner = {
    name: 'Pierre Dubois',
    photo: 'pierre-planner.jpg'
  };
  const getItineraryLink = '#tally-open=wbYAZL&tally-layout=modal&tally-width=800&tally-emoji-text=👋&tally-emoji-animation=wave&city=Geneva';
  const tourGuideLink = 'https://gowithguide.com/s?city=geneva';
  return <CityTemplate city="Geneva" planner={planner} getItineraryLink={getItineraryLink} tourGuideLink={tourGuideLink} />;
}

export default withTitle(Geneva, 'Geneva');