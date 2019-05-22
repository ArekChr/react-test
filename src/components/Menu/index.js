import React, { useState, useEffect } from 'react'
import { Transition  } from 'react-transition-group'
import {
  Logo,
  Container,
  MenuItem,
  Footer,
  Text,
  Icon,
  CloseIcon,
  Avatar,
  Profile,
  Details,
  Ring,
  Mobile,
  BalanceDetails,
  Amount,
  Open,
  LogoImg
} from './styled'

const logo = `${process.env.PUBLIC_URL}/awaymoFullWhite.svg`
const avatar = `${process.env.PUBLIC_URL}/avatar.png`
const duration = 400

const defaultStyle = {
  transition: `right ${duration}ms ease-in-out`,
}

const Menu = () => {

  const [transitionStyles, setTransitionStyles] = useState({
    entering: { right: 0 },
    entered: { right: 0 },
    exiting: { right: window.innerWidth },
    exited: { right: window.innerWidth }
  })

  const [menu, setMenu] = useState(true)

  useEffect(() => {
    const resize = () => {
      setTransitionStyles({
        entering: { right: 0 },
        entered: { right: 0 },
        exiting: { right: window.innerWidth },
        exited: { right: window.innerWidth }
        }
      )
    }

    resize()
    window.addEventListener("resize", resize)

    return () => window.removeEventListener("resize", resize) 
  })

  return (
    <Transition in={menu} timeout={duration}>
      {state => (
        <Container style={{
          ...defaultStyle,
          ...transitionStyles[state]
        }}>
          <Open onClick={() => setMenu(!menu)}>
            <Icon icon="bars" color="white" size="lg"/>
          </Open>
          <Logo>
            <LogoImg src={logo} alt="logo" />
            <CloseIcon onClick={() => setMenu(!menu)} icon="times" color="white" size="1x"/>
          </Logo>
          <Profile>
            <Ring>
              <Avatar src={avatar} alt="avatar"/>
            </Ring>
            <Details>
              <Text>Dominik <Text mobile>Biel</Text></Text>
              <BalanceDetails>
                <Text>Avaiable <Text mobileOnly>Balance</Text></Text>
                <Amount>£1,500.00</Amount>
              </BalanceDetails>
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
            <Mobile column>
              <Text>+44 (0) 20 8050 3459 </Text>
              <Text>support@awaymo.com</Text>
            </Mobile>
          </Footer>
        </Container>
      )}
    </Transition>
  )
}

export default Menu