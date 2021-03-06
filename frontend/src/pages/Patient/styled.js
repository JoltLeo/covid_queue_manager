import styled from 'styled-components';

export const ScreeningContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #E6FFE6;
  height: 100vh;
`;

export const AppTitle = styled.h1`
  color: #004D00;
  text-align: center;
  font-style: normal;
  font-weight: bold;
  font-size: 2rem;

  @media(max-width: 800px) {
    font-size: 1.2rem;
    margin-top: 2rem;
  }
`;

export const Content = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  background-color: #85E085;
  border-radius: 1.5rem;
  padding: 2rem 3rem;
  margin: 1rem;

  @media(max-width: 960px) {
    padding: 1.5rem 1.7rem;
  }
`;

export const PatientScreeningContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: left;
  background-color: #FFF;
  padding: 1rem 1rem 1rem 1rem;
  border-radius: 1rem;
  max-width: 40rem;
  overflow-y: auto;
  max-height: 40rem;

  @media(max-width: 960px) {
    max-width: 15rem;
    max-height: 20rem;
  }
`

export const PageTitle = styled.h2`
  color: #004D00;
  text-align: center;
  font-style: normal;
  font-weight: bold;
  font-size: 1.5rem;

  @media(max-width: 960px) {
    font-size: 1.2rem;
    margin-bottom: .5rem;
  }
`

export const SectionTitle = styled.h3`
  color: #004D00;
  text-align: left;
  font-style: normal;
  font-weight: bold;
  font-size: 1.3rem;
  margin-bottom: .8rem;

  @media(max-width: 960px) {
    font-size: 1rem;
  }
`

export const SectionContainer = styled.div`
  display: flex;
  width: 18rem;
`

export const SectionItem = styled.h3`
  color: #229422;
  font-size: 1.3rem;
  
  @media(max-width: 960px) {
    font-size: 1rem;
  }
`

export const SectionItemValue = styled.h3`
  color: #829882;
  margin-left: 1rem;
  text-transform: uppercase;
  font-size: 1.3rem;

  @media(max-width: 960px) {
    font-size: 1rem;
  }
`

export const ClassificationRowContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: right;

  @media(max-width: 960px) {
    justify-content: center;
    margin: 0.5rem 0 1rem 0;
  }
`

export const ClassificationContainer = styled.div`
  border: 3px solid;
  border-radius: 30px;
  border-color: ${props => props.classificationColor || "#004D00"};
`

export const ClassificationTitle = styled.h3`
  color: ${props => props.classificationColor || "#004D00"};
  text-align: left;
  font-style: normal;
  font-weight: bold;
  font-size: 1.3rem;
  padding: 10px 15px;
  max-width: 100px;
  text-align: center;

  @media(max-width: 960px) {
    font-size: 1rem;
  }
`

export const ButtonArea = styled.div`
  display: flex;
  align-items: center;

  @media(max-width: 960px) {
    display: flex;
    flex-direction: column;
  }
`

export const Button = styled.button`
  height: 3rem;
  width: 16rem;
  border: 2px solid #000;
  background: #008000;
  font-weight: bold;
  font-size: 1.1rem;
  color: #fff;
  border-radius: 1rem;
  margin: 1rem .5rem 0 .5rem;
  cursor: pointer;

  &:hover {
    background-color: #006600;
  }

  @media(max-width: 960px) {
    font-size: .9rem;
    margin: 0.5rem 0;
    height: 2.8rem;
    width: 14rem;
  }
`;