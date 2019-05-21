import React from 'react';
import styled from 'styled-components'
import { background } from './consts/colors'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
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
  faTimes
} from '@fortawesome/free-solid-svg-icons'
import { library } from '@fortawesome/fontawesome-svg-core'

library.add(faUserCircle)
library.add(faPlane)
library.add(faCreditCard)
library.add(faLifeRing)
library.add(faPhone)
library.add(faSignOutAlt)
library.add(faQuestionCircle)
library.add(faInfoCircle)
library.add(faHome)
library.add(faIdCard)
library.add(faShoppingCart)
library.add(faTimes)

const logo = `${process.env.PUBLIC_URL}/awaymoFullWhite.svg`
const avatar = `${process.env.PUBLIC_URL}/avatar.png`

const Logo = styled.div`
  background-color: ${background};
  height: fit-content;
  display: flex;
  justify-content: center;
  padding-bottom: 20px;
  padding-top: 20px;
  margin-bottom: 20px;
  width: 100%;
  border-bottom: solid 2px white;
  position: relative;
`

const Container = styled.div`
  background-color: ${background};
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  padding-left: 10px;
  padding-right: 10px;
`

const MenuItem = styled.div`
  color: white;
  font-size: 25px;
  margin: 5px;
`

const Footer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  border-top: solid 1px white;
  margin-top: auto;
  padding-top: 10px;
  padding-bottom: 30px;
`

const Text = styled.text`
  font-size: 16px;
  color: white;
`

const Icon = styled(FontAwesomeIcon)`
  padding-right: 10px;
`

const CloseIcon = styled(FontAwesomeIcon)`
  float: left;
  position: absolute;
  right: 10px;
`

const Avatar = styled.img`
  width: 50px;
  height: 50px;
  background: white;
  border-radius: 50px;
  padding: 10px;
`

const Profile = styled.div`
  display: flex;
  align-items: center;
  padding-bottom: 10px;
  border-bottom: solid 1px rgba(255,255,255,.5);
`

const Details = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 10px;
  font-weight: bold;
`

const Ring = styled.div`
  width: 76px;
  height: 76px;
  border-radius: 60px;
  border: solid 3px white;
  display: flex;
  justify-content: center;
  align-items: center;
`

function App() {
  return (
    <Container>
      <Logo>
        <img src={logo} alt="logo" />
        <CloseIcon icon="times" color="white" size="1x"/>
      </Logo>
      <Profile>
        <Ring>
          <Avatar src={avatar} alt="avatar"/>
        </Ring>
        <Details>
          <Text>Dominik Biel</Text>
          <Text>Avaiable Balance</Text>
          <Text>£1,500.00</Text>
        </Details>
      </Profile>
      <div>
        <MenuItem><Icon icon="user-circle" color="white" size="1x"/>Profile</MenuItem>
        <MenuItem><Icon icon="credit-card" color="white" size="1x"/>My Payments</MenuItem>
        <MenuItem><Icon icon="shopping-cart" color="white" size="1x"/>My Bookings</MenuItem>
        <MenuItem><Icon icon="home" color="white" size="1x"/>Home</MenuItem>
        <MenuItem><Icon icon="plane" color="white" size="1x" transform={{ rotate: -45 }}/>Flights</MenuItem>
        <MenuItem><Icon icon="question-circle" color="white" size="1x"/>About Us</MenuItem>
        <MenuItem><Icon icon="info-circle" color="white" size="1x"/>FAQ</MenuItem>
        <MenuItem><Icon icon="life-ring" color="white" size="1x"/>Support</MenuItem>
        <MenuItem><Icon icon="phone" color="white" size="1x"/>Contact Us</MenuItem>
        <MenuItem><Icon icon="sign-out-alt" color="white" size="1x"/>Log Out</MenuItem>
        <MenuItem><Icon icon="id-card" color="white" size="1x"/>Resume Application</MenuItem>
      </div>
      <Footer>
        <Text>We're here to help</Text>
        <Text>+44 (0) 20 8050 3459 </Text>
        <Text>support@awaymo.com</Text>
      </Footer>
    </Container>
  );
}

export default App;
