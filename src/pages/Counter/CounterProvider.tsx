import React from 'react'
import { inject } from 'mobx-react'
import CounterViewModel from './CounterViewModel'
import CounterController from './CounterController'
import RootStore from '../../domain/RootStore'

@inject(RootStore.type.COUNTER_MODEL)
class CounterProvider extends React.Component {
  public viewModel: CounterViewModel

  constructor(props: any) {
    super(props)
    const counterModel = props[RootStore.type.COUNTER_MODEL]
    this.viewModel = new CounterViewModel(counterModel)
  }

  render() {
    return <CounterController viewModel={this.viewModel} />
  }
}

export default CounterProvider
