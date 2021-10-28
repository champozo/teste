import styled from 'styled-components'

export const Container = styled.aside`
  display: flex;
  flex-direction: column;
  align-items: center;

  height: 100%;
  max-width: 256px;
  width: 100%;
  padding: 0 20px;
  border-right: 1px solid rgba(228, 228, 228, 0.1);
  position: relative;
  top: 0;
  left: 0;

  transition: max-width .2s ease-in-out;

  @media(max-width: 992px) {
    max-width: 96px;
    overflow-y: scroll;
    overflow-x: hidden;
  }

  @media(max-width: 428px) {
    display: none;
  }
`;

export const LogoArea = styled.div`
  display: flex;
  margin-top: 45px;

  h1 {
    color: #FFF;
    font-family: 'Poppins', sans-serif;
    font-size: 28px;
    margin-left: 8px;
  }

  @media(max-width: 992px) {
    justify-content: center;
    margin: 22px 0;

    h1 {
      display: none;
    }
  }

  @media(max-width: 428px) {
    margin: 26px 0 20px;

    h1 {
      display: block;
    }
  }
`;

export const Logo = styled.img`
  height: 37px;
  width: 37px;
  -webkit-filter: drop-shadow(0px 4px 15px rgba(255, 255, 255, 0.6))
                  drop-shadow(0px 4px 15px rgba(255, 255, 255, 0.6));
  filter: drop-shadow(0px 4px 15px rgba(255, 255, 255, 0.6))
          drop-shadow(0px 4px 15px rgba(255, 255, 255, 0.6));
`;

export const SocialArea = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 60px;
  margin-top: auto;

  img {
    cursor: pointer;

    :hover {
      filter: brightness(0.8);
    }
  }

  @media(max-width: 992px) {
    margin: auto 0;
  }
`
export const MenuButton = styled.button`
  align-self: flex-start;
  border: none;
  background: transparent;
  cursor: pointer;
  transition: filter .2s;
  margin: 20px auto;
  margin: ${({ isMobile }) => isMobile ? '20px 0 20px 20px' : '20px auto'};

  :hover {
    filter: brightness(0.8);
  }

  @media(max-width: 428px) {
    z-index: 11;
    display: flex;
  }
`

export const Divider = styled.div`
  border-bottom: 1px solid rgba(228, 228, 228, 0.1);
  height: 1px;
  width: 100%;

  @media(max-width: 992px) {
    width: 96px;
  }
`;

export const MenuContainer = styled.div`
  display: flex;
  flex-direction: column;

  @media(min-width: 993px) {
    display: none;
  }
`
export const MobileWrapper = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  height: 100%;
  width: 100%;
  background-color: #242731;
  z-index: 10;
  display: ${({ isOpen }) => !isOpen && 'none'};
  overflow: hidden;
`
