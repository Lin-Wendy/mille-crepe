import 'RootDir/generic/utils/createRootApp';

import ReactDOM from 'react-dom';
import {createStore, applyMiddleware} from 'redux';

const ROOT_ELEMENT = document.getElementById('root');

ReactDOM.render(
  <div>
    <h1>
      Github Cards<br />
      <small className="blue-text">Gotta catch them all!</small>
    </h1>
  </div>,
  ROOT_ELEMENT
);
