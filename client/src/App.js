import React, {
  Fragment
} from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Navbar from './components/layout/Navbar';
import Landing from './components/layout/Landing';
import Login from './components/auth/Login';
import Alert from './components/layout/Alert';
import Dashboard from './components/dashboard/Dashboard';
import PrivateRoute from './components/routing/PrivateRoute';
import Movies from './components/movies/Movies';
import Movie from './components/movie/Movie';


//Redux
import { Provider } from 'react-redux';
import store from './store';


import './App.css';

const App = () => {
  return (
    <Provider store={store}>
      <Router>
        <Fragment>
          <Navbar />
          <Route exact path="/" component={Landing} />
          <section className="container">
            <Alert />
            <Switch>
              <Route exact path="/login" component={Login} />
              <Route exact path="/movies" component={Movies} />
              <Route exact path="/movie/:id" component={Movie} />
              <PrivateRoute exact path="/dashboard" component={Dashboard} />
            </Switch>
          </section>

        </Fragment>
      </Router>
    </Provider>
  );
}

export default App;
