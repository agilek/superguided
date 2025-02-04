import React from 'react';
import CityTemplate from '../components/CityTemplate';
import withTitle from '../utils/withTitle';

function Dubrovnik() {
  const planner = {
    name: 'Ana Kovacic',
    photo: 'ana-planner.jpg'
  };
  const getItineraryLink = '#tally-open=wbYAZL&tally-layout=modal&tally-width=800&tally-emoji-text=👋&tally-emoji-animation=wave&city=Dubrovnik';
  const tourGuideLink = 'https://gowithguide.com/s?city=dubrovnik';
  return <CityTemplate city="Dubrovnik" planner={planner} getItineraryLink={getItineraryLink} tourGuideLink={tourGuideLink} />;
}

export default withTitle(Dubrovnik, 'Dubrovnik');