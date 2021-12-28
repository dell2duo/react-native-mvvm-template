import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { NavigationContainer } from '@react-navigation/native'
import CounterProvider from './pages/Counter/CounterProvider'
import { Text, View } from 'react-native'

const Stack = createNativeStackNavigator()

const Routes: React.FC = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{ headerShown: false, statusBarHidden: true }}
        initialRouteName="Counter"
      >
        <Stack.Screen name="Counter" component={Teste} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

const Teste = () => {
  return (
    <View>
      <Text>shauhsua</Text>
    </View>
  )
}

export default Routes
