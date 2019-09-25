import React, {Component} from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import PageWrapper from './components/PageWrapper'

//pages
import Home from './components/Pages/Home'
import About from './components/Pages/About'
import Contact from './components/Pages/Contact'

class App extends Component{
  render(){
    return(
      <div>
        <Router>
          <PageWrapper>
              <Route
                exact={true}
                path="/"
                component={Home}
              />
              <Route
                path="/about"
                component={About}
              />
              <Route
                path="/contact"
                component={Contact}
              />
          </PageWrapper>
        </Router>
      </div>
    )
  }
}
export default App;