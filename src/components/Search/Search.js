import React from "react";
import {
  Container,
  Image,
  ContainerInputs,
  ContainerInput,
  Input,
  Icon,
  Button,
  Modal,
  ModalContainer,
  ContainerInputModal,
  ContainerButton,
  ContainerElements,
  Label,
  Location,
  Guests,
  Title,
  Description,
  Count,
  Number,
  ButtonCount,
  ContainerButtonMobile,
  Message,
} from "./Search.styles";
import Logo from "../../images/logo.png";

const Search = ({
  locations,
  modal,
  isActiveLocation,
  isActiveGuests,
  handleModal,
  addLocation,
  selectLocation,
  location,
  adults,
  children,
  lessAdult,
  plusAdult,
  lessChildren,
  plusChildren,
  addGuests,
  searchStays,
  guestError,
}) => {
  return (
    <Container>
      <Image src={Logo} />

      <ContainerInputs onClick={handleModal}>
        <ContainerInput sizeInput="45%">
          <Input
            placeholder="Add location"
            value={location}
            onClick={addLocation}
          />
        </ContainerInput>
        <ContainerInput sizeInput="35%">
          {adults > 0 || children > 0 ? (
            <Input
              placeholder="Add guests"
              value={`${adults + children} guests`}
              onClick={addGuests}
            />
          ) : (
            <Input placeholder="Add guests" value={null} onClick={addGuests} />
          )}
        </ContainerInput>

        <ContainerButton onClick={addLocation}>
          <Icon>
            <span className="material-icons">search</span>
          </Icon>
        </ContainerButton>
      </ContainerInputs>

      {modal && (
        <Modal>
          <ModalContainer>
            <ContainerElements>
              <ContainerInputModal sizeInput="45%">
                <Label>location</Label>
                <Input
                  isMobile={true}
                  isMobileBottom={true}
                  isActive={isActiveLocation && isActiveLocation}
                  placeholder="Add location"
                  value={location}
                  onClick={addLocation}
                  onChange={addLocation}
                />
                {isActiveLocation &&
                  locations &&
                  locations.map((location, index) => (
                    <Location
                      isMobile={true}
                      key={index}
                      onClick={() => selectLocation(location.name)}
                    >
                      <span className="material-icons">room</span>
                      {location.name}
                    </Location>
                  ))}
              </ContainerInputModal>
              <ContainerInputModal sizeInput="35%">
                <Input
                  isMobile={true}
                  placeholder="Add guests"
                  isActive={isActiveGuests && isActiveGuests}
                  onClick={addGuests}
                  value={`${adults + children} guests`}
                />
                {guestError && <Message>Guests are missing</Message>}
                {isActiveGuests && (
                  <>
                    <Guests>
                      <Title>Adults</Title>
                      <Description>Ages 13 or above</Description>
                      <Count>
                        <ButtonCount onClick={lessAdult}>-</ButtonCount>
                        <Number>{adults}</Number>
                        <ButtonCount onClick={plusAdult}>+</ButtonCount>
                      </Count>
                    </Guests>
                    <Guests>
                      <Title>Children</Title>
                      <Description>Ages 2-12</Description>
                      <Count>
                        <ButtonCount onClick={lessChildren}>-</ButtonCount>
                        <Number>{children}</Number>
                        <ButtonCount onClick={plusChildren}>+</ButtonCount>
                      </Count>
                    </Guests>
                  </>
                )}
              </ContainerInputModal>
              <ContainerButtonMobile>
                <Button onClick={searchStays}>Search</Button>
              </ContainerButtonMobile>
            </ContainerElements>
          </ModalContainer>
        </Modal>
      )}
    </Container>
  );
};

export { Search };
