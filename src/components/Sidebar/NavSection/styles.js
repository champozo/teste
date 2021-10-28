import styled from 'styled-components'

export const SectionTitle = styled.p`
  color: #808191;
  font-size: 12px;
  font-family: 'Inter', sans-serif;
  margin-bottom: 18px;
  margin-left: 16px;

  @media(max-width: 992px) {
    margin-left: 0;
  }

  @media(max-width: 428px) {
    font-weight: bold;
    font-size: 16px;
  }
`
export const LinkContainer = styled.div`
  display: flex;
  flex-direction: column;

  @media(max-width: 428px) {
    width: 90%;
  }
`
export const Divider = styled.div`
  border-bottom: 1px solid rgba(228, 228, 228, 0.1);
  height: 1px;
  width: 100%;
  margin: 30px 0;

  @media(max-width: 992px) {
    width: 96px;
  }

  @media(max-width: 428px) {
    width: 100%;
  }
`;
