import React from 'react';
import CityTemplate from '../components/CityTemplate';
import withTitle from '../utils/withTitle';

function Bilbao() {
  const planner = {
    name: 'Carlos Ruiz',
    photo: 'carlos-planner.jpg'
  };
  const getItineraryLink = '#tally-open=wbYAZL&tally-layout=modal&tally-width=800&tally-emoji-text=👋&tally-emoji-animation=wave&city=Bilbao';
  const tourGuideLink = 'https://gowithguide.com/s?city=bilbao';
  return <CityTemplate city="Bilbao" planner={planner} getItineraryLink={getItineraryLink} tourGuideLink={tourGuideLink} />;
}

export default withTitle(Bilbao, 'Bilbao');