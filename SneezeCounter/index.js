import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import {Provider} from 'react-redux';
import {store} from './src/redux/store';
import {PaperProvider} from 'react-native-paper';
import {RootSiblingParent} from 'react-native-root-siblings';

const appWrappedInReduxProvider = () => {
  return (
    <Provider store={store}>
      <RootSiblingParent>
        <PaperProvider>
          <App />
        </PaperProvider>
      </RootSiblingParent>
    </Provider>
  );
};

AppRegistry.registerComponent(appName, () => appWrappedInReduxProvider);
