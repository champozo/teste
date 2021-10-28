import styled from "styled-components";

export const DesktopContainer = styled.div`
  background-image: url('/img/ducks.png');
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;

  border-radius: 24px;
  min-height: 236px;
  height: auto;
  min-width: 296px;
  max-width: 1215px;
  width: 100%;
  margin-top: 38px;
  padding-left: 64px;
  display: flex;
  flex-direction: column;
  justify-content: center;

  h1 {
    color: #FFF;
    font-family: 'Poppins', sans-serif;
    font-size: 40px;
    line-height: 60px;
  }

  h2 {
    color: #FFF;
    font-family: 'Inter', sans-serif;
    font-size: 14px;
    font-weight: 400;
    line-height: 24px;
    max-width: 580px;
  }

  @media (max-width: 429px) {
    display: none;
  }
`

export const MobileContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: linear-gradient(0deg, rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url('/img/ducksMobile.png'), #000000;
  border-radius: 24px;
  min-height: 540px;
  position: relative;
  width: 343px;

  h1 {
    color: #FFF;
    font-family: 'Poppins', sans-serif;
    font-size: 40px;
    font-style: normal;
    font-weight: 500;
    height: 64px;
    line-height: 32px;
    text-align: center;
    width: 248px;
  }

  h2 {
    color: #FFFFFF;
    font-family: 'Inter', sans-serif;
    font-style: normal;
    font-weight: normal;
    font-size: 14px;
    height: 48px;
    line-height: 24px;
    margin-top: 16px;
    text-align: center;
    width: 248px;
    margin-bottom: 24px;
  }

  @media (min-width: 429px) {
    display: none;
  }
`

export const CloseButton = styled.div`
  align-items: center;
  background-color: #242731;
  border-radius: 20px;
  display: flex;
  height: 40px;
  justify-content: center;
  position: absolute;
  right: 8px;
  top: 8px;
  width: 40px;
  z-index: 5;
`

export const Button = styled.a`
  align-items: center;
  background-color: #242731;
  border-radius: 16px;
  color: #FFF;
  cursor: pointer;
  display: flex;
  height: 56px;
  justify-content: center;
  width: 147px;
  margin-top: 12px;
  font-family: 'Inter', sans-serif;
  font-weight: 700;
  font-size: 14px;
  line-height: 20px;

  p {
    transition: filter .1s;
    :hover {
      filter: brightness(0.8);
    }
  }
`
