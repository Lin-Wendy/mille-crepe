import {combineReducers} from 'redux';
import forEach from 'lodash/forEach';

const preReducerList = [
  {name: 'Member', defaultName: 'user'},
  {name: 'common'},
  {name: 'Product'},
];

let reducersList = {};
forEach(preReducerList, (data) => {
  const reduxField = (data.defaultName || data.name || '').toLowerCase();
  reducersList[reduxField] = require(`RootDir/entry/${data.name}/models`).default;
});

export default combineReducers(reducersList);
