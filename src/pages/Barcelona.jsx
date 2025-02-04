import React from 'react';
import CityTemplate from '../components/CityTemplate';
import withTitle from '../utils/withTitle';

function Barcelona() {
  const planner = {
    name: 'Mike Acler',
    photo: 'mike-acler-planner.jpg'
  };
  const getItineraryLink = '#tally-open=wbYAZL&tally-layout=modal&tally-width=800&tally-emoji-text=👋&tally-emoji-animation=wave&city=Barcelona';
  const tourGuideLink = 'https://gowithguide.com/s?city=barcelona';
  return <CityTemplate city="Barcelona" planner={planner} getItineraryLink={getItineraryLink} tourGuideLink={tourGuideLink} />;
}

export default withTitle(Barcelona, 'Barcelona');