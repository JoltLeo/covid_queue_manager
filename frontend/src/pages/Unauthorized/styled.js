import styled from 'styled-components';

export const HistoryContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #E6FFE6;
  height: 100vh;
`;

export const AppTitle = styled.div`
  color: #004D00;
  text-align: center;
  font-style: normal;
  font-weight: bold;
  font-size: 2rem;

  @media(max-width: 800px) {
    font-size: 1.2rem;
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

  @media(max-width: 800px) {
    padding: 1.5rem 2.5rem;
  }
`;

export const ButtonArea = styled.div`
  display: flex;
  align-items: center;

  @media(max-width: 800px) {
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

  @media(max-width: 800px) {
    font-size: .9rem;
    margin: 0.5rem 0;
    height: 2.8rem;
    width: 14rem;
  }
`;