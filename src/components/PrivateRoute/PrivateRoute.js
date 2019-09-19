import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import TokenControl from 'utils/token';

const PrivateRoute = ({ component: Component, ...rest }) => {
  const token = TokenControl.Token();
  return (
    <Route
      {...rest}
      render={props =>
        token ? <Component {...props} /> : <Redirect to={{ pathname: '/login', state: { from: props.location } }} />
      }
    />
  );
};

export default PrivateRoute;
