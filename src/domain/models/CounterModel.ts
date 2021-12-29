import { makeAutoObservable } from 'mobx'

class CounterModel {
  private count = 0
  /**
   * CounterModel has the business logic of a respective part of the app.
   * Here we can also specify with method for Storing the data,
   * we can use a remote database or a local storage solution.
   */

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
