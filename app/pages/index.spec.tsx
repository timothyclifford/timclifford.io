import React from 'react';
import { render } from '@testing-library/react';
import Home from './index';

const renderComponent = (props = {}) => {
  return {
    ...render(<Home {...props} />),
    props: {
      ...props,
    },
  };
};

test('renders the home page', () => {
  renderComponent();
});
