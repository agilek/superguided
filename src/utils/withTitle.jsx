import React from 'react';
import { Helmet } from 'react-helmet';
import { generateTitle } from './titleUtils';

const withTitle = (WrappedComponent, city) => {
  return (props) => {
    return (
      <>
        <Helmet>
          <title>{generateTitle(city)}</title>
        </Helmet>
        <WrappedComponent {...props} />
      </>
    );
  };
};

export default withTitle;