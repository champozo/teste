import styled from "styled-components";

export const MobileArea = styled.div`
  align-items: center;
  align-self: center;
  background-color: #242731;
  border: 1px solid #FFF;
  border-radius: 24px;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  height: fit-content;
  margin-bottom: 30px;
  margin-top: 48px;
  padding-top: 32px;
  width: 343px;

  @media (min-width: 767px) {
    display: none;
  }
`;

export const HeadingArea = styled.div`
  display: flex;
  flex-direction: column;
  height: auto;
  width: 295px;
`;

export const SelectFilter = styled.select`
  background: rgba(228, 228, 228, 0.1);
  border: none;
  border-radius: 16px;
  color: #808191;
  font-family: 'Inter', sans-serif;
  font-weight: 600;
  font-size: 14px;
  height: 56px;
  line-height: 20px;
  opacity: 0.3;
  outline: none;
  width: 295px;
  display: none;
`;

export const TopArea = styled.div`
  height: 128px;
  width: 295px;
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

export const Divider = styled.div`
  border-bottom: 1px solid rgba(228, 228, 228, 0.1);
  height: 1px;
  width: 100%;
  margin-top: 32px;
`;

export const MobileItem = styled.div`
  border-bottom: 1px solid rgba(228, 228, 228, 0.1);
  min-height: 151px;
  width: 345px;
  margin-top: 24px;
`;

export const FirstArea = styled.div`
  display: flex;
  flex-direction: row;
  height: 64px;
  position: relative;
  width: 345px;

  p {
    margin-left: 15px;
    font-family: 'Inter', sans-serif;
    font-size: 14px;
    font-weight: 600;
    color: #FFF;
    align-self: center;
  }
`;

export const CheckInput = styled.input`
  height: 20px;
  margin-left: 25px;
  margin-top: 22px;
  width: 20px;
`;

export const ImageArea = styled.div`
  background-color: #A0D7E7;
  border-radius: 8px;
  height: 55px;
  margin-left: 53px;
  width: 72px;
  z-index: 2;
`;

export const BackImageArea = styled.div`
  background-color: #CDF4FF;
  border-radius: 8px;
  height: 55px;
  margin-left: 73.92px;
  margin-top: 7.92px;
  position: absolute;
  width: 60px;
  z-index: 1;
`;

export const RightSide = styled.div`
  height: 64px;
  margin-left: 24px;
  width: 155px;

  h1 {
    color: #FFFFFF;
    font-family: 'Inter', sans-serif;
    font-size: 16px;
    font-style: normal;
    font-weight: 600;
    line-height: 19px;
  }

  h2 {
    color: #B2B3BD;
    font-family: 'Inter', sans-serif;
    font-style: normal;
    font-size: 12px;
    font-weight: 500;
    line-height: 16px;
    margin-top: 10px;
  }
`;

export const SecondArea = styled.div`
  align-items: center;
  border: 1px solid rgba(228, 228, 228, 0.1);
  border-radius: 8px;
  display: flex;
  flex-direction: row;
  font-family: 'Inter', sans-serif;
  font-size: 14px;
  font-style: normal;
  font-weight: normal;
  height: 40px;
  line-height: 24px;
  margin-left: 25px;
  margin-top: 23px;
  text-align: center;
  width: 295px;

  span {
    color: #5F75EE;
    height: 24px;
    margin-left: 27px;
    width: 48px;
  }

  p {
    color: #FFF;
    height: 24px;
    margin-left: 27px;
    width: 85px;
  }

  h2 {
    /* color: #7FBA7A; */
    font-size: 14px;
    font-style: normal;
    font-weight: normal;
    height: 24px;
    margin-left: 27px;
    width: 65px;
  }
`;

export const Pipe = styled.div`
  background-color: ${ props => `#${ props.color }` };
  border-radius: 8px;
  height: 32px;
  margin: 4px 0 4px 4px;
  width: 8.8px;
`;

export const LoadMore = styled.div`
  align-items: center;
  background-color: #1B1D21;
  border-radius: 16px;
  color: #FFF;
  display: flex;
  font-family: 'Inter', sans-serif;
  font-size: 14px;
  font-style: normal;
  font-weight: bold;
  height: 56px;
  justify-content: center;
  line-height: 20px;
  margin-top: 24px;
  margin-bottom: 32px;
  width: 295px;
`;

export const InputArea = styled.label`
  background-color: #282b35;
  border-radius: 16px;
  height: 56px;
  margin-left: 17px;
  max-width: 260px;
  width: 100%;
  display: flex;
  align-items: center;

  @media (max-width: 797px) {
    max-width: 235px;
    margin-left: 0;
    margin-top: 15px;

  }

  @media (max-width: 376px) {
    margin-left: 0px;
    max-width: 295px;
    margin-top: 16px;
  }
`;

export const SearchInput = styled.input`
  margin-left: 16px;
  height: 40px;
  background-color: #282b35;
  border: none;
  outline: none;
  color: #ffffff;
  width: 129px;

  ::placeholder{
    color: #808191;
  }
`;

export const PriceChange = styled.h2`
  color: ${({ color }) => color && color}
`
