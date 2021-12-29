import CounterModel from '../../domain/models/CounterModel'

export default class CounterViewModel {
  constructor(private counterStore: CounterModel) {}
  /**
   * ViewModel is responsible for updating the UI
   * and for handling user interaction, connecting
   * the UI and the domain layer.
   */

  increment = (): void => {
    console.log('increment view model')
    this.counterStore.increment()
  }

  decrement = (): void => {
    console.log('decrement view model')
    this.counterStore.decrement()
  }

  getValue = (): number => {
    return this.counterStore.getCounter()
  }
}
