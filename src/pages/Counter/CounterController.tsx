import { observer } from 'mobx-react'
import React from 'react'
import CounterView from './CounterView'
import CounterViewModel from './CounterViewModel'

type CounterControllerProps = {
  viewModel: CounterViewModel
}
type CounterControllerState = {
  counter?: number
}

@observer
class CounterController extends React.Component<
  CounterControllerProps,
  CounterControllerState
> {
  /**
   * Controller is used in this situation to
   * control the lifecycle of the component
   * and to handle the logic of the component,
   * so as some local states.
   */

  componentDidMount = () => {
    console.log('CounterController did mount')
  }

  componentWillUnmount = () => {
    console.log('CounterController will unmount')
  }

  render() {
    const { viewModel } = this.props
    return (
      <CounterView
        counter={viewModel.getValue()}
        onIncrementCounter={viewModel.increment}
        onDecrementCounter={viewModel.decrement}
      />
    )
  }
}

export default CounterController
