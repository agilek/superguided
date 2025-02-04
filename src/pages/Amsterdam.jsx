import React from 'react';
import CityTemplate from '../components/CityTemplate';
import withTitle from '../utils/withTitle';

function Amsterdam() {
  const planner = {
    name: 'Emma van der Berg',
    photo: 'emma-planner.jpg'
  };
  const getItineraryLink = '#tally-open=wbYAZL&tally-layout=modal&tally-width=800&tally-emoji-text=👋&tally-emoji-animation=wave&city=Amsterdam';
  const tourGuideLink = 'https://gowithguide.com/s?city=Amsterdam';
  return <CityTemplate city="Amsterdam" planner={planner} getItineraryLink={getItineraryLink} tourGuideLink={tourGuideLink} />;
}

export default withTitle(Amsterdam, 'Amsterdam');