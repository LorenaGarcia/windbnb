import styled from "styled-components";

const Container = styled.div`
  width: 100%;
`;

const Header = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

const Title = styled.p`
  font-family: "Montserrat", sans-serif;
  font-style: normal;
  font-weight: bold;
  font-size: 24px;
  line-height: 29px;
  color: #333333;
`;

const Stays = styled.p`
  font-family: "Montserrat", sans-serif;
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 17px;
  color: #4f4f4f;
`;

const ContainerGrid = styled.div`
  display: grid;
  gap: 2rem;
  grid-template-columns: 1fr 1fr 1fr;

  @media (max-width: 480px) {
    grid-template-columns: 1fr;
  }

  @media (min-width: 481px) and (max-width: 950px) {
    grid-template-columns: 1fr 1fr;
  }
`;

const Card = styled.div`
  min-height: 300px;
  cursor: pointer;

  @media (min-width: 2500px) and (max-width: 3500px) {
    max-width: 100%;
  }

  @media (min-width: 3501px) and (max-width: 6000px) {
    max-width: 100%;
  }
`;

const Image = styled.img`
  width: 100%;
  height: 270px;
  border-radius: 24px;
`;

const Name = styled.p`
  font-family: "Montserrat", sans-serif;
  font-style: normal;
  font-weight: 600;
  font-size: 16px;
  line-height: 20px;
  color: #333333;
`;

const Information = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

const SuperHost = styled.div`
  border: 1px solid #4f4f4f;
  box-sizing: border-box;
  border-radius: 12px;
  padding: 0.5rem;

  font-family: "Montserrat", sans-serif;
  font-style: normal;
  font-weight: bold;
  font-size: 12px;
  line-height: 15px;
  text-transform: uppercase;
  color: #4f4f4f;
`;

const Description = styled.p`
  font-family: "Montserrat", sans-serif;
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 17px;
  color: #828282;
`;

const Stars = styled.div`
  font-family: "Montserrat", sans-serif;
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 17px;
  color: #4f4f4f;

  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  align-content: center;
`;

const Icon = styled.div`
  color: #eb5757;
`;

export {
  Container,
  Title,
  Header,
  Stays,
  ContainerGrid,
  Card,
  Image,
  Name,
  Information,
  SuperHost,
  Description,
  Stars,
  Icon,
};
