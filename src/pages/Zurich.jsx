import React from 'react';
import CityTemplate from '../components/CityTemplate';
import withTitle from '../utils/withTitle';

function Zurich() {
  const planner = {
    name: 'Thomas Keller',
    photo: 'thomas-keller-planner.jpg'
  };
  const getItineraryLink = '#tally-open=wbYAZL&tally-layout=modal&tally-width=800&tally-emoji-text=👋&tally-emoji-animation=wave&city=Zurich';
  const tourGuideLink = 'https://gowithguide.com/s?city=zurich';
  return <CityTemplate city="Zurich" planner={planner} getItineraryLink={getItineraryLink} tourGuideLink={tourGuideLink} />;
}

export default withTitle(Zurich, 'Zurich');