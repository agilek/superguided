import React from 'react';
import CityTemplate from '../components/CityTemplate';
import withTitle from '../utils/withTitle';

function Edinburgh() {
  const planner = {
    name: 'Angus MacLeod',
    photo: 'angus-planner.jpg'
  };
  const getItineraryLink = '#tally-open=wbYAZL&tally-layout=modal&tally-width=800&tally-emoji-text=👋&tally-emoji-animation=wave&city=Edinburgh';
  const tourGuideLink = 'https://gowithguide.com/s?city=edinburgh';
  return <CityTemplate city="Edinburgh" planner={planner} getItineraryLink={getItineraryLink} tourGuideLink={tourGuideLink} />;
}

export default withTitle(Edinburgh, 'Edinburgh');