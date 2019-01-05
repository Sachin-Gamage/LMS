/* tslint:disable */
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Route, HashRouter, Switch } from 'react-router-dom';
import './index.css';
import registerServiceWorker from './registerServiceWorker';
import appRoutes from './routes/appRoutes';
import { Provider } from 'react-redux';
import { configureStore } from './store';

const store  = configureStore();

ReactDOM.render(
    <Provider store={store}>
      <HashRouter>
          <Switch>
              {
                  appRoutes.map((route, key) => (
                      <Route path={route.path} component={route.component} key={key} />
                  ))
              }
          </Switch>
      </HashRouter>
    </Provider>
, document.getElementById("root") as HTMLElement);
registerServiceWorker();