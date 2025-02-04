import React from 'react';
import CityTemplate from '../components/CityTemplate';
import withTitle from '../utils/withTitle';

function Milan() {
  const planner = {
    name: 'Giuseppe Conti',
    photo: 'giuseppe-planner.jpg'
  };
  const getItineraryLink = '#tally-open=wbYAZL&tally-layout=modal&tally-width=800&tally-emoji-text=👋&tally-emoji-animation=wave&city=Milan';
  const tourGuideLink = 'https://gowithguide.com/s?city=milan';
  return <CityTemplate city="Milan" planner={planner} getItineraryLink={getItineraryLink} tourGuideLink={tourGuideLink} />;
}

export default withTitle(Milan, 'Milan');