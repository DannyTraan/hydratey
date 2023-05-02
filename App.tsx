import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import AuthenticatedNavigation from './src/navigation/AuthenticatedNavigation';

function App(): JSX.Element {
  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <AuthenticatedNavigation />
      </NavigationContainer>
    </SafeAreaProvider>
  );
}

export default App;
