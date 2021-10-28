import styled from "styled-components";

export const CollectionsContainer = styled.div`
  border-radius: 24px;
  box-shadow: 0px 0px 15px -2px #000000;
  margin-top: 36px;
  margin-bottom: 72px;
  max-width: 1215px;
  width: 100%;

  @media (max-width: 767px) {
    display: none;
  }

  @media (max-width: 1024px) {
    width: 90%;
  }
`;

export const FilterArea = styled.div`
  display: flex;
  height: 61px;
  margin-left: 32px;
  margin-top: 32px;

  @media (max-width: 797px) {
    width: 90%;
    flex-direction: column;
    height: auto;
    justify-content: center;
    align-items: center;
  }
`;

export const InputLabel = styled.label`
  background-color: #282b35;
  border-radius: 16px;
  height: 56px;
  margin-left: 16px;
  max-width: 260px;
  width: 100%;
  display: flex;
  align-items: center;
  padding: 16px;

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

export const TableArea = styled.div`
  margin-top: 41.27px;
  min-height: 45.43px;
  width: 100%;
`;

export const TableHead = styled.div`
  border-bottom: 1px solid rgba(228, 228, 228, 0.03);
  color: #B2B3BD;
  font-family: 'Inter', sans-serif;
  font-size: 13px;
  height: 45.43px;
  line-height: 18px;
  width: 100%;
  display: grid;
  grid-template-columns: 2fr repeat(5, 1fr);

  @media (max-width: 1024px) {
    grid-template-columns: 2fr repeat(3, 1fr);
    grid-column-gap: 20px;
  }

  @media (max-width: 768px) {
    grid-template-columns: 2.5fr repeat(3, 1fr);
    grid-column-gap: 20px;
  }
`;

export const TableHeader = styled.div`
  cursor: pointer;
  font-weight: ${({ isActive }) => isActive && 'bold'};
  color: ${({ isActive }) => isActive && '#fff'};
  transition: all .2s;
  padding-left: ${({ hasPadding }) => hasPadding && '28px'};

  :hover {
    filter: brightness(0.8)
  }

  @media(max-width: 1024px) {
    display: ${({ isVisible }) => isVisible && 'none'}
  }
`

// export const SelectDays = styled.select`
//   background-color: rgba(228, 228, 228, 0.1);
//   border: none;
//   border-radius: 16px;
//   color: #808191;
//   font-weight: 600;
//   font-family: 'Inter', sans-serif;
//   font-size: 14px;
//   height: 56px;
//   line-height: 20px;
//   outline: none;
//   opacity: 0.3;
//   padding: 0 24px 0 23px;
//   width: 235px;
//   display: none;
// `;
