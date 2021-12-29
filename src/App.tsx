import { Provider } from 'mobx-react'
import React from 'react'
import Routes from './Routes'
import RootStore from './domain/RootStore'

const rootStore = new RootStore()

export default function App() {
  return (
    <Provider {...rootStore.getStores()}>
      <Routes />
    </Provider>
  )
}
