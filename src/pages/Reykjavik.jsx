import React from 'react';
import CityTemplate from '../components/CityTemplate';
import withTitle from '../utils/withTitle';

function Reykjavik() {
  const planner = {
    name: 'Sigrid Jonsdottir',
    photo: 'sigrid-planner.jpg'
  };
  const getItineraryLink = '#tally-open=wbYAZL&tally-layout=modal&tally-width=800&tally-emoji-text=👋&tally-emoji-animation=wave&city=Reykjavik';
  const tourGuideLink = 'https://gowithguide.com/s?city=reykjavik';
  return <CityTemplate city="Reykjavik" planner={planner} getItineraryLink={getItineraryLink} tourGuideLink={tourGuideLink} />;
}

export default withTitle(Reykjavik, 'Reykjavik');