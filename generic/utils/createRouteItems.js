import map from 'lodash/map';
import reduce from 'lodash/reduce';

import LandingPage from 'RootDir/entry/common/containers/LandingPage';
import Member from 'RootDir/entry/Member/components/Login';
import ProductOverview from 'RootDir/entry/Product/containers/Overview';
import ProductProfile from 'RootDir/entry/Product/containers/Profile';
import TaskProfile from 'RootDir/entry/Product/containers/Task';

import searchPic from 'RootDir/vendor/starry-sky/icons/search.svg';
import notePic from 'RootDir/vendor/starry-sky/icons/note_menu.svg';
import chatroomPic from 'RootDir/vendor/starry-sky/icons/chatroom_menu.svg';

// What are the isExact and isStrict? See the exact and strict.
// https://reacttraining.com/react-router/web/api/Route/path-string
const routeData = {
  Dashboard: {appNavAlign: 'left', path: '/', isExact: true},
  Products: {
    appNavAlign: 'left', path: '/products', component: ProductOverview, isExact: true,
    children: [
      {path: '/product/:id', component: ProductProfile, isExact: true},
      {path: '/products/:viewMode', component: ProductOverview, isExact: true},
      {path: '/task/:id', component: TaskProfile, isExact: true},
    ],
  },
  Reports: {appNavAlign: 'left', path: '/reports'},
  Quality: {appNavAlign: 'left', path: '/quality'},
  Approvals: {appNavAlign: 'left', path: '/approvals'},
  Notes: {appNavAlign: 'left', path: '/notes'},
  Search: {appNavAlign: 'right', path: '/search', pic: searchPic, hiddenText: true},
  ChatRoom: {appNavAlign: 'right', path: '/chat_room', pic: chatroomPic, hiddenText: true},
  Notifications: {appNavAlign: 'right', path: '/notifications', pic: notePic, hiddenText: true},
  Member: {appNavAlign: 'right', path: '/member', component: Member},
  Sign: {path: '/sign', component: LandingPage},
};

export const leftItems = reduce(routeData, (fullRoutes, currentRoute, index) => {
  if (currentRoute.appNavAlign === 'left') {
    let item = {
      path: currentRoute.path, name: index,
      icon: currentRoute.icon, pic: currentRoute.pic,
      hiddenText: currentRoute.hiddenText || false,
    };

    fullRoutes.push(item);
  }
  return fullRoutes;
}, []);

export const rightItems = reduce(routeData, (fullRoutes, currentRoute, index) => {
  if (currentRoute.appNavAlign === 'right') {
    let item = {
      path: currentRoute.path, name: index,
      icon: currentRoute.icon, pic: currentRoute.pic,
      hiddenText: currentRoute.hiddenText || false,
    };

    fullRoutes.push(item);
  }
  return fullRoutes;
}, []);

export const routes = reduce(routeData, (routes, currentRoute, index) => {
  if (currentRoute.component) {
    routes.push({
      path: currentRoute.path, name: index, component: currentRoute.component,
      isExact: (currentRoute.isExact || false), isStrict: (currentRoute.isStrict || false),
      children: map(currentRoute.children, (child) => ({
        path: child.path, component: child.component,
        isExact: (child.isExact || false), isStrict: (child.isStrict || false),
      })),
    });
  }

  return routes;
}, []);
