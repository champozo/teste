import styled from "styled-components";

export const Collection = styled.div`
  border-bottom: 1px solid rgba(228, 228, 228, 0.03);
  height: 104px;
  margin: 20px 0;
  width: 100%;
  display: grid;
  grid-template-columns: 2fr repeat(5, 1fr);

  @media (max-width: 1024px) {
    grid-template-columns: 2fr repeat(3, 1fr);
    grid-column-gap: 20px;
  }
`;

export const Card = styled.div`
  display: flex;
  align-items: center;
  position: relative;

  img {
    border-radius: 50%;
    margin: 0 16px;
  }

  h3 {
    margin-left: 10px;
    font-family: 'Inter', sans-serif;
    font-size: 14px;
    font-weight: 600;
    color: #FFF;
  }
`;

export const TextArea = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  font-family: 'Inter', sans-serif;
  font-size: 12px;
  font-weight: 600;

  p {
    color: #FFF;
  }

  span {
    color: #808191;
  }
`;

export const Data = styled.div`
  font-family: 'Inter', sans-serif;
  font-size: 14px;
  color: ${({ color }) => color ? color : '#FFF'};
  line-height: 24px;
  display: flex;
  align-items: center;

  @media(max-width: 1024px) {
    display: ${({ isVisible }) => isVisible && 'none'};

    p {
      max-width: 70px;
      text-overflow: ellipsis;
      overflow: hidden;
    }
  }
`

export const DataPercent = styled.span`
  color: ${({ color }) => color ? color : '#FFF'};
  height: 24px;
  margin-left: 8px;
  padding-top: 2px;
`
