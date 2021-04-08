import React from "react";
import {
  Container,
  Header,
  Title,
  Stays,
  ContainerGrid,
  Card,
  Image,
  Name,
  Information,
  SuperHost,
  Description,
  Icon,
  Stars,
} from "./MainContent.styles";

const MainContent = ({ rooms }) => {
  return (
    <Container>
      <Header>
        <Title>Stays in Finland</Title>
        <Stays>12+ stays</Stays>
      </Header>

      <ContainerGrid>
        {rooms.map((value, index) => (
          <Card key={index}>
            <Image src={value.photo} />
            <Information>
              {value.superHost && <SuperHost>superhost</SuperHost>}
              <Description>{value.type}</Description>
              <Stars>
                <Icon>
                  <span className="material-icons">star</span>
                </Icon>
                {value.rating}
              </Stars>
            </Information>
            <Name>{value.title}</Name>
          </Card>
        ))}
      </ContainerGrid>
    </Container>
  );
};

export { MainContent };
