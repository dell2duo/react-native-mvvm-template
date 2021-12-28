import React from 'react'
import { Text, View, TouchableOpacity } from 'react-native'

type CounterViewProps = {
  counter: number
  onIncrementCounter: () => void
  onDecrementCounter: () => void
}

class CounterView extends React.Component<CounterViewProps> {
  render() {
    const { counter, onIncrementCounter, onDecrementCounter } = this.props

    return (
      <View
        style={{
          flex: 1,
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <TouchableOpacity onPress={onIncrementCounter}>
          <Text>+1</Text>
        </TouchableOpacity>
        <Text>{counter}</Text>
        <TouchableOpacity onPress={onDecrementCounter}>
          <Text>-1</Text>
        </TouchableOpacity>
      </View>
    )
  }
}

export default CounterView
