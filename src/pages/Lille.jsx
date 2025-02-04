import React from 'react';
import CityTemplate from '../components/CityTemplate';
import withTitle from '../utils/withTitle';

function Lille() {
  const planner = {
    name: 'Marie Laurent',
    photo: 'marie-planner.jpg'
  };
  const getItineraryLink = '#tally-open=wbYAZL&tally-layout=modal&tally-width=800&tally-emoji-text=👋&tally-emoji-animation=wave&city=Lille';
  const tourGuideLink = 'https://gowithguide.com/s?city=lille';
  return <CityTemplate city="Lille" planner={planner} getItineraryLink={getItineraryLink} tourGuideLink={tourGuideLink} />;
}

export default withTitle(Lille, 'Lille');