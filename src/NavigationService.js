import { NavigationActions } from 'react-navigation';

let _navigator;
let _dispatch;

function setTopLevelNavigator(navigator) {
  _navigator = navigator;
  _dispatch = navigator.props.dispatch;
}

function navigate(routeName, params) {
    
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
