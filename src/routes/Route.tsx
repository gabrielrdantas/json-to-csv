import React from 'react';
import { Route as ReactDOMRoute, RouteProps } from 'react-router-dom';

interface Props extends RouteProps {
  component: React.ComponentType;
}

const Route: React.FC<Props> = ({ component: Component, ...rest }) => {
  return <ReactDOMRoute {...rest} render={() => <Component />} />;
};

export default Route;
