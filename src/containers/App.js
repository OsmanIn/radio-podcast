import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import '../containers/App.css';
import Home from '../components/Home';
import Podcasts from '../components/Podcasts';
import Contact from '../components/Contact';

import Layout from './Layout';
import NavigationBar from './NavigationBar';
import Jumbotron from './Jumbotron'
import Footer from "../containers/Footer"


class App extends Component {
  render() {
    return (
      <React.Fragment>
        <Router>
          <div className='site-container'>
            <NavigationBar />
            <Jumbotron />
            <Layout>
              <Switch >
                <Route path="/(|home)/" exact component={Home} />
                <Route path="/podcasts" component={Podcasts} />
                <Route path="/contact" component={Contact} />
              </Switch>
            </Layout>
            <Footer />
          </div>
        </Router>
      </React.Fragment>
    )
  };
}



export default App;