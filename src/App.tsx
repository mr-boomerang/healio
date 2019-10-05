import React from 'react';
import Sidebar from './component/Sidebar';
import ResearchList from './component/ResearchList';
import InfoSearch from './component/InfoSearch';
import { Switch, Route } from 'react-router-dom';
import MainForm from './component/MainForm';

const App: React.FC = () => {
  return (
    <div className="App">
      <Sidebar />
      <Switch>
        <Route path='/app' component={ResearchList} />
        <Route path='/info' component={InfoSearch} />
        <Route path='/form' component={MainForm} />
      </Switch>
    </div>
  );
}

export default App;
