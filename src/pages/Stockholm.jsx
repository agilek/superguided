import React from 'react';
import CityTemplate from '../components/CityTemplate';
import withTitle from '../utils/withTitle';

function Stockholm() {
  const planner = {
    name: 'Erik Andersson',
    photo: 'erik-andersson-planner.jpg'
  };
  const getItineraryLink = '#tally-open=wbYAZL&tally-layout=modal&tally-width=800&tally-emoji-text=👋&tally-emoji-animation=wave&city=Stockholm';
  const tourGuideLink = 'https://gowithguide.com/s?city=stockholm';
  return <CityTemplate city="Stockholm" planner={planner} getItineraryLink={getItineraryLink} tourGuideLink={tourGuideLink} />;
}

export default withTitle(Stockholm, 'Stockholm');