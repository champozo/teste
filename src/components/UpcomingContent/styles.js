import styled from "styled-components";

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100%;
  width: 100%;
  overflow-y: scroll;
  overflow-x: hidden;
  padding: 0px clamp(2rem, 4rem, 4rem) 1rem;
  position: relative;
`;

export const Title = styled.div`
  max-width: 1215px;
  width: 100%;
  color: #fff;
  font-family: 'Poppins', sans-serif;
  font-size: 48px;
  font-weight: 600;
  margin-top: 40px;
  text-align: start;

  @media(max-width: 428px) {
    max-width: 368px;
    font-size: 32px;
    font-weight: 600;
    /* margin-left: 32px; */
    line-height: 48px;
    margin-bottom: 60px;
    margin-right: 70px;
  }
`;

export const Upcoming = styled.div`
  max-width: 1215px;
  width: 100%;
  height: auto;
  border-radius: 24px;
  box-shadow: 0px 0px 15px -2px #000000;
  align-self: center;
  margin-top: 46px;
  padding: 28px 0px 28px 16px;
  @media (max-width: 800px) {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 90%;
    min-width: 334px;
    padding: 15px 0;
  }
`;

export const CollectionCard = styled.div`
  min-height: 223px;
  width: 100%;
  border-bottom: 1px solid rgba(228, 228, 228, 0.03);
  display: flex;
  padding: 6px 22px 20px;
  margin-bottom: 28px;

  @media (max-width: 800px) {
    flex-direction: column;
    width: 100%;
    padding: 0;
  }
`;

export const CollectionData = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 100%;
`

export const CardHeader = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;

  h1 {
    font-size: 16px;
    font-weight: 600;
    color: #fff;
  }

  @media (max-width: 800px) {
    align-items: center;
    justify-content: center;
  }
`

export const DataPill = styled.span`
  height: 16px;
  width: 40px;
  border-radius: 20px;
  background-color: ${({ color }) => color ? color : '#FF754C'};
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: 'Inter', sans-serif;
  font-style: normal;
  font-weight: 600;
  font-size: 8px;
  line-height: 16px;
  color: #FFF;
`

export const CardDescription = styled.div`
  width: 100%;
  max-height: 120px;
  text-overflow: ellipsis;
  overflow: auto;
  margin: 3px 0;
  display: flex;
  align-items: center;

  font-family: 'Inter', sans-serif;
  font-style: normal;
  font-weight: normal;
  font-size: 14px;
  line-height: 24px;
  color: #808191;

  p {
    height: 100%;
  }

  @media (max-width: 800px) {
    align-items: center;
    justify-content: center;
    display: flex;
    width: 100%;
    height: auto;
    padding: 10px 20px;
    text-align: center;
  }
  @media (max-width: 428px) {
    max-height: none;
  }

  ul {
    list-style-type: none;
    height: 120px;
  } 
`

export const CardFooter = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 15px;

  @media (max-width: 800px) {
    flex-direction: column;
  }
`

export const SocialLinks = styled.div`
  display: flex;
  gap: 12px;
  width: auto;
`

export const SocialIcon = styled.a`
  height: 32px;
  width: 32px;
  border-radius: 32px;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px solid rgba(228, 228, 228, 0.1);
  margin-left: ${ props => `${props.left}px` };
  cursor: pointer;
  background: transparent;

  img {
    margin: 0;
  }

  transition: filter .2s;

  :hover {
    filter: brightness(0.8);
  }
`;

export const Button = styled.a`
  height: 42px;
  width: 102px;
  background-color: #6C5DD3;
  border-radius: 16px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;

  font-family: 'Inter', sans-serif;
  font-style: normal;
  font-weight: 600;
  font-size: 16px;
  line-height: 19px;
  color: #FFF;
  margin-left: auto;

  transition: filter .2s;

  :hover {
    filter: brightness(0.8);
  }
  @media (max-width: 800px) {
    margin-left: 0;
    margin-top: 10px;
    width: 120px;
  }
`;

export const Image = styled.img`
  border-radius: ${props => `${props.radius}`};
  width: ${props => `${props.width}px`};
  margin-left: ${props => `${props.left}px`};
  margin-right: ${props => `${props.right}px`};
  margin-top: ${props => `${props.top}px`};
  margin-bottom: 10px;
  height: ${props => `${props.height}px`};
  color: ${ props => props.color };
  z-index: ${ props => props.index ? props.index : 2 };
  position: ${ props => props.position };
  align-self: ${ props => props.align };
  margin: ${ props => props.margin };
  @media (min-width: 800px) {
    margin-right: 28px;
    margin-bottom: 0;
  }
`;
