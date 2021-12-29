import { observer } from 'mobx-react'
import React from 'react'
import { Text, View, TouchableOpacity } from 'react-native'

type CounterViewProps = {
  counter: number
  onIncrementCounter: () => void
  onDecrementCounter: () => void
}

class CounterView extends React.Component<CounterViewProps> {
  /**
   * View is just going to be a dumb component, with no logic
   * or state. It just needs to display the counter value in this case.
   */

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
        <TouchableOpacity
          style={{
            backgroundColor: '#c2c2c2',
            height: 50,
            width: 50,
            borderRadius: 25,
            justifyContent: 'center',
            alignItems: 'center',
          }}
          onPress={onIncrementCounter}
        >
          <Text>+1</Text>
        </TouchableOpacity>
        <Text>{counter}</Text>
        <TouchableOpacity
          style={{
            backgroundColor: '#c2c2c2',
            height: 50,
            width: 50,
            borderRadius: 25,
            justifyContent: 'center',
            alignItems: 'center',
          }}
          onPress={onDecrementCounter}
        >
          <Text>-1</Text>
        </TouchableOpacity>
      </View>
    )
  }
}

export default CounterView
