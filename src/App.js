import React from 'react';
import {BrowserRouter, Route, Redirect, Switch} from "react-router-dom";
import {routes} from "./router";

function App() {
    const auth = localStorage.getItem('token') ?? false;
  return (
      <BrowserRouter>
          <Switch>
              {routes.map((route, index) =>
                  <Route component={route.component}
                         path={route.patch}
                         exact={route.exact}
                         key={index + 1}
                  />
              )}
              <Redirect to={!auth ? "/login" : '/create'}/>
          </Switch>
      </BrowserRouter>
  );
}

export default App;
