import 'RootDir/generic/utils/createRootApp';

import ReactDOM from 'react-dom';
import {createStore, applyMiddleware} from 'redux';

const ROOT_ELEMENT = document.getElementById('root');

ReactDOM.render(
  <div>
    <h1>Hello World</h1>
  </div>,
  ROOT_ELEMENT
);
