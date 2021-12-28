import CounterModel from './models/CounterModel'

class RootStore {
  static type = {
    COUNTER_MODEL: 'counterModel',
  }
  public counterModel: CounterModel

  constructor() {
    this.counterModel = new CounterModel()
  }

  getStores = () => ({
    [RootStore.type.COUNTER_MODEL]: this.counterModel,
  })
}

export default RootStore
