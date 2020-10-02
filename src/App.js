import React from 'react';
import {HashRouter, Route} from 'react-router-dom';

import Headers from './Header';
import Main from './Main';
import Detail from './Detail';

function App() {
  return (
    <HashRouter>
      <Headers />
      <Route path="/" exact={true} component={Main} />
      <Route path="/detail" component={Detail} />
    </HashRouter>
  )
}

export default App;