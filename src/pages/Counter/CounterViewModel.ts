import CounterModel from '../../domain/models/CounterModel'

export default class CounterViewModel {
  constructor(private counterStore: CounterModel) {}

  increment = () => {
    console.log('increment view model')
    this.counterStore.increment()
  }

  decrement = () => {
    console.log('decrement view model')
    this.counterStore.decrement()
  }

  getValue = () => {
    return this.counterStore.getCounter()
  }
}
