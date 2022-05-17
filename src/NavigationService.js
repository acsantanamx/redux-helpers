import { NavigationActions } from 'react-navigation';

let _navigator;

function setTopLevelNavigator(navigatorRef) {
  console.log('setTopLevelNavigator', _navigator);  
  _navigator = navigatorRef;
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
