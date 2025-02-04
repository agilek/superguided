import React from 'react';
import CityTemplate from '../components/CityTemplate';
import withTitle from '../utils/withTitle';

function London() {
  const planner = {
    name: 'James Wilson',
    photo: 'james-planner.jpg'
  };
  const getItineraryLink = '#tally-open=wbYAZL&tally-layout=modal&tally-width=800&tally-emoji-text=👋&tally-emoji-animation=wave&city=London';
  const tourGuideLink = 'https://gowithguide.com/s?city=london';
  return <CityTemplate city="London" planner={planner} getItineraryLink={getItineraryLink} tourGuideLink={tourGuideLink} />;
}

export default withTitle(London, 'London');