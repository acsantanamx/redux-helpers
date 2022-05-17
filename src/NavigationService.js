import { NavigationActions } from 'react-navigation';

let _navigator;

function setTopLevelNavigator(navigator) {
  console.log('setTopLevelNavigator', navigator);  
  _navigator = navigator;
}

function navigate(routeName, params) {
  console.log('_navigator', _navigator);
    
  _navigator.dispatch(
    NavigationActions.navigate({
      routeName,
      params
    })
  );
}

export default {
  navigate,
  setTopLevelNavigator
};
