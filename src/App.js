import React, { Suspense, lazy } from 'react';
import { BrowserRouter , Route, Switch } from 'react-router-dom';
import './App.css';
import Loading from './components/Loading/Loading'
// import { Switch, Route } from 'react-router';

const LandingPage = lazy(()=> import("./pages/LandingPage/LandingPage"))

function App() {
  return (
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <div className="App">
        <Suspense fallback={<Loading />}>
          <Switch>
            <Route exact path="/form" component={LandingPage} />
          </Switch>
        </Suspense>
      </div>
    </BrowserRouter>
  );
}

export default App;