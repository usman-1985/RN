// App.tsx
import React, { useEffect } from 'react';
import { StyleSheet, View } from 'react-native';
import GlobalFont from 'react-native-global-font';
import HomeScreenV1 from './src/components/homeScreenV1';
import HomeScreenV2 from './src/components/homeScreenV2';
import HomeScreenV3 from './src/components/homeScreenV3';
import SignUpPage from './src/components/signUpPage';
import LogInPage from './src/components/logInPage';

const App = () => {
  useEffect(() => {
    const fontName = 'Roboto'; // The font you want to use
    GlobalFont.applyGlobal(fontName);
  }, []);

  return (
    <View style={styles.container}>
      <HomeScreenV1 />
      <HomeScreenV2 />
      <HomeScreenV3 />
      <SignUpPage />
      <LogInPage />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default App;
