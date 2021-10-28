import styled from "styled-components";

export const LastInfos = styled.div`
  align-items: center;
  border: 1px solid rgba(228, 228, 228, 0.1);
  border-radius: 16px;
  display: flex;
  min-height: 135px;
  justify-content: space-between;
  margin-top: 52.37px;
  height: fit-content;
  width: 100%;
  max-width: 1140px;
  padding: 0 24px;
  overflow-x: auto;
  overflow-y: hidden;

  @media (max-width: 1024px) {
    display: none;
  }
`;

export const InfoSection = styled.div`
  height: 135px;
  margin: 0 10px;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export const InfoHeadingArea = styled.div`
  align-items: center;
  color: #808191;
  display: flex;
  font-family: 'Inter', sans-serif;
  font-size: 12px;
  height: 16px;
  line-height: 16px;
  max-width: 205.63px;
`;

export const Image = styled.img`
  border-radius: ${props => `${props.radius}px`};
  width: ${props => `${props.width}px`};
  margin-left: ${props => `${props.left}px`};
  margin-right: ${props => `${props.right}px`};
  margin-top: ${props => `${props.top}px`};
  height: ${props => `${props.height}px`};
  color: ${ props => props.color };
  z-index: ${ props => props.index ? props.index : 2 };
  position: ${ props => props.position };
`;

export const PriceArea = styled.div`
  display: flex;
  height: 48px;
  width: 100%;
`;

export const Price = styled.div`
  color: #FFF;
  font-family: 'Poppins', sans-serif;
  font-size: 32px;
  font-weight: 500;
  letter-spacing: -0.5px;
  line-height: 48px;
`;

export const PriceVariation = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  justify-content: center;
  padding-left: 8px;
  width: 100%;

  p {
    background-color: #7FBA7A;
    border-radius: 20px;
    color: #FFF;
    font-family: 'Inter', sans-serif;
    font-size: 8px;
    font-weight: 600;
    height: 16px;
    line-height: 16px;
    text-align: center;
    width: 41px;
  }

  span {
    color: rgba(255, 255, 255, 0.6);
    font-family: 'Poppins', sans-serif;
    font-weight: 500;
    font-size: 12px;
    letter-spacing: -0.5px;
    line-height: 18px;
  }
`;

export const ProgressBar = styled.div`
  background-color: rgba(228, 228, 228, 0.1);
  border-radius: 1px;
  height: 2px;
  width: 128px;
`;

export const InsideBar = styled.div`
  background-color: ${props => props.color};
  border-radius: 1px;
  height: 2px;
  width: ${({ width }) => width ? width : '50%'};
`;
