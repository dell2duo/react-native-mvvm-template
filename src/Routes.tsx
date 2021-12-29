import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { NavigationContainer } from '@react-navigation/native'
import CounterProvider from './pages/Counter/CounterProvider'

const Stack = createNativeStackNavigator()

const Routes: React.FC = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{ headerShown: false, statusBarHidden: false }}
        initialRouteName="Counter"
      >
        <Stack.Screen name="Counter" component={CounterProvider} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default Routes
