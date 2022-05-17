import { NavigationActions } from 'react-navigation';

let _dispatch;

function setTopLevelNavigator(dispatch) {
  console.log('setTopLevelNavigator', dispatch);  
  _dispatch = dispatch;
}

function navigate(routeName, params) {
  console.log('_dispatch', _dispatch);
    
  _dispatch(
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
