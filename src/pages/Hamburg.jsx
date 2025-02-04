import React from 'react';
import CityTemplate from '../components/CityTemplate';
import withTitle from '../utils/withTitle';

function Hamburg() {
  const planner = {
    name: 'Thomas Weber',
    photo: 'thomas-planner.jpg'
  };
  const getItineraryLink = '#tally-open=wbYAZL&tally-layout=modal&tally-width=800&tally-emoji-text=👋&tally-emoji-animation=wave&city=Hamburg';
  const tourGuideLink = 'https://gowithguide.com/s?city=hamburg';
  return <CityTemplate city="Hamburg" planner={planner} getItineraryLink={getItineraryLink} tourGuideLink={tourGuideLink} />;
}

export default withTitle(Hamburg, 'Hamburg');