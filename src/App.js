
import './App.css';
import Menu from './Menu';
import { Switch, Route } from 'react-router-dom';
import Home from './components/Home';
import First from './components/First'
import Second from './components/Second';
import Fourth from './components/Fourth';
import Fifth from './components/Fifth';
import Sixth from './components/Sixth';
import Seventh from './components/Seventh';
import Eight from './components/Eight';
import Ninth from './components/Ninth';
import pnf from './components/Pagenotfound';
import Third from './components/Third';
function App() {
  return (
    <>
      <Menu />
      <Switch>
        <Route  exact path='/' component={Home} />
        <Route  path='/.first' component={First} />
        <Route  path='/.second' component={Second} />
        <Route  path='/.third' component={Third} />
        <Route  path='/.fourth' component={Fourth} />
        <Route  path='/.fifth' component={Fifth} />
        <Route  path='/.sixth' component={Sixth} />
        <Route  path='/.seventh' component={Seventh} />
        <Route  path='/.eight' component={Eight} />
        <Route  path='/.ninth' component={Ninth} />
        <Route  component={pnf} />
      </Switch>

    </>
  );
}

export default App;
