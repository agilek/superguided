import React from 'react';
import CityTemplate from '../components/CityTemplate';
import withTitle from '../utils/withTitle';

function Bratislava() {
  const planner = {
    name: 'Martin Sodek',
    photo: 'martin-planner.jpg'
  };
  const getItineraryLink = '#tally-open=wbYAZL&tally-layout=modal&tally-width=800&tally-emoji-text=👋&tally-emoji-animation=wave&city=Bratislava';
  const tourGuideLink = 'https://gowithguide.com/s?city=bratislava';
  return <CityTemplate city="Bratislava" planner={planner} getItineraryLink={getItineraryLink} tourGuideLink={tourGuideLink} />;
}

export default withTitle(Bratislava, 'Bratislava');