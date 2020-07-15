import React from 'react'
import MainScreen from '../screens/MainScreen'
import { Provider } from 'react-redux'
import { store } from '../store/configureStore'
import GlobalStyle from './styles'

const App = () => {
  return (
    <Provider store={store}>
      <GlobalStyle />
      <MainScreen />
    </Provider>
  )
}

export default App
