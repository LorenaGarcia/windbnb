import styled from "styled-components";

const Container = styled.div`
  display: grid;
  height: 100vh;
  padding: 2rem;
  grid-template-rows: auto 1fr auto;
  grid-template-columns: 1fr;
  grid-template-areas:
    "navigation"
    "main"
    "footer";

  @media (max-width: 480px) {
    padding: 1rem;
  }
`;

const Navigation = styled.div`
  grid-area: navigation;
`;

const Main = styled.div`
  grid-area: main;
`;

const Footer = styled.div`
  grid-area: footer;
  padding: 1rem;
  font-family: "Montserrat", sans-serif;
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 17px;
  text-align: center;
  color: #828282;
  margin-top: 5rem;
`;

export { Container, Navigation, Main, Footer };
