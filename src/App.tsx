import { Provider } from 'mobx-react'
import React from 'react'
import RootStore from './domain/RootStore'
import CounterProvider from './pages/Counter/CounterProvider'
import Routes from './Routes'

const rootStore = new RootStore()

export default function App() {
  return (
    <Provider {...rootStore.getStores()}>
      <CounterProvider />
      {/* <Routes /> */}
    </Provider>
  )
}
