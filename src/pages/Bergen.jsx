import React from 'react';
import CityTemplate from '../components/CityTemplate';
import withTitle from '../utils/withTitle';

function Bergen() {
  const planner = {
    name: 'Erik Larsen',
    photo: 'erik-planner.jpg'
  };
  const getItineraryLink = '#tally-open=wbYAZL&tally-layout=modal&tally-width=800&tally-emoji-text=👋&tally-emoji-animation=wave&city=Bergen';
  const tourGuideLink = 'https://gowithguide.com/s?city=bergen';
  return <CityTemplate city="Bergen" planner={planner} getItineraryLink={getItineraryLink} tourGuideLink={tourGuideLink} />;
}

export default withTitle(Bergen, 'Bergen');