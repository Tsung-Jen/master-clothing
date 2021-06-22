import './App.css';
import { Switch, Route } from 'react-router-dom';

import Homepage from './pages/homepage/homepage.component';

const Hatspage = () => {
  return (
    <div>
      <h1>HATS PAGE</h1>
    </div>
  );
}

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path='/' component={Homepage} />
        <Route path='/hats' component={Hatspage} />
      </Switch>
    </div>
  );
}

export default App;
