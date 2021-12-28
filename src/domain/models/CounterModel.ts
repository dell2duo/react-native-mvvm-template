import { makeAutoObservable } from 'mobx'

class CounterModel {
  private count = 0

  constructor() {
    makeAutoObservable(this)
  }

  public increment = () => {
    this.count++
    console.log('increment', this.count)
  }

  public decrement = () => {
    this.count--
    console.log('increment', this.count)
  }

  public getCounter = () => {
    return this.count
  }
}

export default CounterModel
