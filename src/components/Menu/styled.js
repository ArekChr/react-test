import styled from 'styled-components'
import { background } from '../../consts/colors'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const mobileWidth = '768px'

export const Logo = styled.div`
  background-color: ${background};
  height: fit-content;
  display: flex;
  justify-content: center;
  padding-bottom: 20px;
  padding-top: 20px;
  width: 100%;
  border-bottom: solid 2px white;
  position: relative;
`

export const Container = styled.div`
  background-color: ${background};
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  padding-left: 10px;
  padding-right: 10px;
  position: relative;
`

export const MenuItem = styled.div`
  color: white;
  font-size: 25px;
  margin: 5px;
  font-weight: bold;
  transition: text-shadow: 0.5s ease;

  :hover {
    cursor: pointer;
    text-shadow: 2px 2px rgba(0,0,0,.2);
  }

  @media (max-width: ${mobileWidth}) {
    font-weight: normal;

    :not(:last-child) {
      border-bottom: solid 1px rgba(255,255,255,.5);
      margin-bottom: 10px;
      padding-bottom: 10px;
    }
  }
`

export const Footer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  border-top: solid 1px white;
  margin-top: auto;
  padding-top: 10px;
  padding-bottom: 30px;
`

export const Text = styled.span`
  font-size: 16px;
  color: white;

  @media (max-width: ${mobileWidth}) {
    display: ${props => props.mobile ? "none;" : "block;"}
  }
`

export const Icon = styled(FontAwesomeIcon)`
  padding-right: 10px;
`

export const CloseIcon = styled(FontAwesomeIcon)`
  float: left;
  position: absolute;
  right: 10px;

  :hover {
    cursor: pointer;
  }
`

export const Avatar = styled.img`
  width: 50px;
  height: 50px;
  background: white;
  border-radius: 50px;
  padding: 10px;
`

export const Profile = styled.div`
  display: flex;
  align-items: center;
  padding: 15px 0;
  border-bottom: solid 1px rgba(255,255,255,.5);

  @media (max-width: ${mobileWidth}) {
    padding: 20px 0 15px 0;
    flex-direction: column;
    border-bottom: none;
  }
`

export const Details = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 10px;
  font-weight: bold;

  @media (max-width: ${mobileWidth}) {
    align-items: center;
  }
`

export const Ring = styled.div`
  width: 76px;
  height: 76px;
  border-radius: 60px;
  border: solid 3px white;
  display: flex;
  justify-content: center;
  align-items: center;
  @media (max-width: ${mobileWidth}) {
    display: contents;
  }
`

export const Mobile = styled.div`
  display: flex;
  flex-direction: ${props => props.column ? "column" : "row"};
  
  @media (max-width: ${mobileWidth}) {
    display: none;
  }
`

export const BalanceDetails = styled.div`
  display: flex;
  flex-direction: column;
  
  @media (max-width: ${mobileWidth}) {
    flex-direction: row-reverse;
  }
`

export const Amount = styled(Text)`
  @media (max-width: ${mobileWidth}) {
    padding-right: 5px;
  }
`

export const Open = styled.div`
  background-color: ${background};
  position: absolute;
  right: -35px;
  width: 30px;
  padding-left: 5px;
  top: 50px;
  height: 70px;
  border-bottom-right-radius: 20px;
  border-top-right-radius: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
`
