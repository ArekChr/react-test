import React from 'react';
import Menu from './components/Menu'
import {
  faUserCircle,
  faPlane,
  faCreditCard,
  faLifeRing,
  faPhone,
  faSignOutAlt,
  faQuestionCircle,
  faInfoCircle,
  faHome,
  faIdCard,
  faShoppingCart,
  faTimes,
  faBars
} from '@fortawesome/free-solid-svg-icons'
import { library } from '@fortawesome/fontawesome-svg-core'

library.add(
  faUserCircle,
  faPlane,
  faCreditCard,
  faLifeRing,
  faPhone,
  faSignOutAlt,
  faQuestionCircle,
  faInfoCircle,
  faHome,
  faIdCard,
  faShoppingCart,
  faTimes,
  faBars
)

const App = () => {
  return (
    <Menu />
  )
}

export default App
