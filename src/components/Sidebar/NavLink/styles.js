import styled from 'styled-components'

export const StyledLink = styled.a`
  display: flex;
  align-items: center;
  width: 100%;
  height: 56px;
  background: ${({ isActive }) => isActive && '#6C5DD3'};
  border-radius: 12px;
  cursor: pointer;

  p {
    font-family: 'Inter', sans-serif;
    font-size: 14px;
    line-height: 20px;
    color: ${({ isActive }) => isActive ? '#fff' : '#808191'};
    font-weight: ${({ isActive }) => isActive && 'bold'};
    flex: 1;
    padding-right: 16px;
    transition: color .2s;

    :hover {
      color: ${({ isActive }) => !isActive && '#6C5DD3'}
    }

    @media(max-width: 992px) {
      display: none;
    }

    @media(max-width: 428px) {
      display: block;
    }

    @media(min-width: 415px) {
      max-width: 216px;
    }
  }
`

export const IconContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 56px;
  height: 100%;
`
export const SoonIcon = styled.div`
  align-items: center;
  background-color: #FF754C;
  border-radius: 12px;
  color: #FFF;
  display: flex;
  font-family: 'Inter', sans-serif;
  font-size: 8px;
  font-weight: 600;
  height: 16px;
  justify-content: center;
  width: 40px;

  @media(max-width: 992px) {
    display: none;
  }

  @media(max-width: 428px) {
    display: flex;
  }
`;
