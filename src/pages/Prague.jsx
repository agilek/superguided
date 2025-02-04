import React from 'react';
import CityTemplate from '../components/CityTemplate';
import withTitle from '../utils/withTitle';

function Prague() {
  const planner = {
    name: 'Jan Stanek',
    photo: 'jan-planner.jpg'
  };
  const getItineraryLink = '#tally-open=wbYAZL&tally-layout=modal&tally-width=800&tally-emoji-text=👋&tally-emoji-animation=wave&city=Prague';
  const tourGuideLink = 'https://gowithguide.com/s?city=prague';
  return <CityTemplate city="Prague" planner={planner} getItineraryLink={getItineraryLink} tourGuideLink={tourGuideLink} />;
}

export default withTitle(Prague, 'Prague');