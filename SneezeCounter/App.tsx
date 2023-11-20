import {useAppSelector} from './src/redux/hooks';
import {selectAuthentication} from './src/redux/features/authentication/authenticationSlice';
import {SafeAreaView, StyleSheet} from 'react-native';
import {LoginScreen} from './src/screens/login/LoginScreen';
import React from 'react';
import HomeScreen from './src/screens/home/HomeScreen';

export const App = () => {
  const {isAuthenticated} = useAppSelector(selectAuthentication);

  if (!isAuthenticated) {
    return (
      <SafeAreaView style={styles.safeAreaWrapper}>
        <LoginScreen />
      </SafeAreaView>
    );
  }
  return (
    <SafeAreaView style={styles.safeAreaWrapper}>
      <HomeScreen />
    </SafeAreaView>
  );
};
export default App;

const styles = StyleSheet.create({
  safeAreaWrapper: {
    flex: 1,
  },
});
