import React from 'react';
import CityTemplate from '../components/CityTemplate';
import withTitle from '../utils/withTitle';

function Krakow() {
  const planner = {
    name: 'Piotr Kowalski',
    photo: 'piotr-planner.jpg'
  };
  const getItineraryLink = '#tally-open=wbYAZL&tally-layout=modal&tally-width=800&tally-emoji-text=👋&tally-emoji-animation=wave&city=Krakow';
  const tourGuideLink = 'https://gowithguide.com/s?city=krakow';
  return <CityTemplate city="Krakow" planner={planner} getItineraryLink={getItineraryLink} tourGuideLink={tourGuideLink} />;
}

export default withTitle(Krakow, 'Krakow');