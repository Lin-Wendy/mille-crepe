import 'RootDir/generic/utils/createRootApp';

import ReactDOM from 'react-dom';
// Redux ，管理 React 的 state
// 目前用不著先不引入使用！
// https://redux.js.org/
// import {createStore, applyMiddleware} from 'redux';

/* 導入 Title 元件

  主要基於 React 的三個特點 - Component (元件) 、 State (狀態) 與 Lifecycle (生命週期)
  State 會儲存透過 Ajax 和 Variable (變數) 的資料。
  所有的頁面都會進入 React 的 Lifecycle ，進入 Lifecycle 後頁面執行 ReactDOM.render 開始 Render (渲染) 網頁內容，
  渲染過程中 State 可能會影響 Component 被渲染的時機，

  因此當顯示的內容越來越複雜多元， 一方面可以透過 State 控制頁面內的 Component ，另一方面可以減少每個 React 檔案內容的大小。

  ※ 重點：這裡比較單純，可以不使用 Component 來切內容！！！ :)
  ※ React lifecycle 可以看這篇：https://hackernoon.com/reactjs-component-lifecycle-methods-a-deep-dive-38275d9d13c0
*/
import Title from './component/Title';

const ROOT_ELEMENT = document.getElementById('root');

ReactDOM.render(
  <div>
    <Title />
  </div>,
  ROOT_ELEMENT
);
