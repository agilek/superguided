import React from 'react';
import CityTemplate from '../components/CityTemplate';
import withTitle from '../utils/withTitle';

function Florence() {
  const planner = {
    name: 'Marco Rossi',
    photo: 'marco-planner.jpg'
  };
  const getItineraryLink = '#tally-open=wbYAZL&tally-layout=modal&tally-width=800&tally-emoji-text=👋&tally-emoji-animation=wave&city=Florence';
  const tourGuideLink = 'https://gowithguide.com/s?city=florence';
  return <CityTemplate city="Florence" planner={planner} getItineraryLink={getItineraryLink} tourGuideLink={tourGuideLink} />;
}

export default withTitle(Florence, 'Florence');