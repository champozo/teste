import styled from 'styled-components'

export const Container = styled.div`
  margin-top: 68px;

  @media(max-width: 992px) {
    margin: 0;
  }

  @media(max-width: 428px) {
    margin-top: 40px;
  }
`

export const SectionContainer = styled.div`
  @media(max-width: 992px) {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }

  @media(max-width: 428px) {
    align-items: flex-start;
    margin-left: 20px;
  }
`
