import React from 'react';
import CityTemplate from '../components/CityTemplate';
import withTitle from '../utils/withTitle';

function Glasgow() {
  const planner = {
    name: 'Hamish Campbell',
    photo: 'hamish-planner.jpg'
  };
  const getItineraryLink = '#tally-open=wbYAZL&tally-layout=modal&tally-width=800&tally-emoji-text=👋&tally-emoji-animation=wave&city=Glasgow';
  const tourGuideLink = 'https://gowithguide.com/s?city=glasgow';
  return <CityTemplate city="Glasgow" planner={planner} getItineraryLink={getItineraryLink} tourGuideLink={tourGuideLink} />;
}

export default withTitle(Glasgow, 'Glasgow');