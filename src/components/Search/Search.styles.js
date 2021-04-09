import styled from "styled-components";

const Container = styled.div`
  width: 100%;
  margin-bottom: 2rem;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  @media (max-width: 480px) {
    flex-direction: column;
    align-items: flex-start;
  }
`;

const Image = styled.img`
  width: auto;
`;

const ContainerInputs = styled.div`
  width: 25%;
  height: 55px;
  background: #ffffff;
  box-shadow: 0px 1px 6px rgba(0, 0, 0, 0.1);
  border-radius: 16px;

  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  @media (max-width: 480px) {
    width: 100%;
    margin-top: 3rem;
  }
`;

const Input = styled.input`
  width: 100%;
  font-family: "Mulish", sans-serif;
  font-size: 14px;
  line-height: 18px;
  color: #333333;
  border: none;
  height: 53px;
  border-radius: 16px;
  padding-left: 1rem;
  border: ${(props) => (props.isActive ? "1px solid #333333" : "none")};

  :focus-visible {
    outline: none;
    border: 1px solid #333333;
  }

  @media (max-width: 480px) {
    box-shadow: ${(props) =>
      props.isMobile ? "0px 1px 6px rgba(0, 0, 0, 0.1)" : "none"};
    margin-bottom: ${(props) => (props.isMobileBottom ? "5rem" : "0")};
  }
`;

const ContainerInput = styled.div`
  width: ${(props) => (props.sizeInput ? props.sizeInput : "20%")};
  border-right: 1px solid #f2f2f2;
  height: 55px;
  padding-right: 1.5rem;

  @media (max-width: 480px) {
    width: 100%;
  }
`;

const ContainerButton = styled.div`
  width: 20%;
  height: 55px;

  @media (max-width: 480px) {
    width: 100%;
    text-align: center;
  }
`;

const ContainerButtonMobile = styled.div`
  width: 20%;
  height: 55px;

  @media (max-width: 480px) {
    width: 95%;
    text-align: center;
    position: absolute;
    bottom: 2rem;
  }
`;

const Button = styled.button`
  width: 65%;
  height: 100%;
  border: none;
  background: #eb5757;
  box-shadow: 0px 1px 6px rgb(0 0 0 / 10%);
  border-radius: 16px;
  margin-left: 15%;
  cursor: pointer;
  outline: none;

  font-family: "Mulish", sans-serif;
  font-style: normal;
  font-weight: bold;
  font-size: 14px;
  line-height: 18px;
  color: #f2f2f2;

  @media (max-width: 480px) {
    margin-left: 0;
    width: 40%;
  }
`;

const Icon = styled.div`
  display: flex;
  height: 100%;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  align-content: center;
  color: #eb5757;
  cursor: pointer;
`;

const Modal = styled.div`
  background: rgba(79, 79, 79, 0.4);
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  opacity: 0;
  pointer-events: none;

  opacity: 1;
  pointer-events: auto;
`;

const ModalContainer = styled.div`
  min-height: 15rem;
  background-color: white;
  position: relative;
  padding: 3rem 5rem;

  @media (max-width: 480px) {
    padding: 1rem;
    min-height: 30rem;
  }
`;

const ContainerElements = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: flex-start;
  box-shadow: 0px 1px 6px rgba(0, 0, 0, 0.1);
  border-radius: 16px;

  @media (max-width: 480px) {
    flex-direction: column;
    box-shadow: none;
  }
`;

const ContainerInputModal = styled.div`
  padding-right: 1.5rem;
  width: ${(props) => (props.sizeInput ? props.sizeInput : "20%")};
  border-right: 1px solid #f2f2f2;
  height: 55px;

  @media (max-width: 480px) {
    width: 95%;
    border-right: 0;
    margin-bottom: 0.2rem;
  }
`;

const Label = styled.label`
  font-family: Mulish;
  font-style: normal;
  font-weight: 800;
  font-size: 9px;
  line-height: 11px;
  text-transform: uppercase;

  color: #333333;
  display: block;
  position: absolute;
  top: em(15, 12);
  font-size: em(12);
  line-height: em(15, 12);
  font-weight: bold;
  padding-top: 0.2rem;
  padding-left: 1rem;
`;

const Location = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 0.7rem;

  font-family: Mulish;
  font-style: normal;
  font-weight: normal;
  font-size: 14px;
  line-height: 18px;
  color: #4f4f4f;
  cursor: pointer;

  :hover {
    color: #333333;
    font-size: 15px;
  }
`;

const Guests = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 0.7rem;

  font-family: Mulish;
  font-style: normal;
  font-weight: normal;
  font-size: 14px;
  line-height: 18px;
  color: #4f4f4f;
`;

const Title = styled.div`
  font-family: Mulish;
  font-style: normal;
  font-weight: bold;
  font-size: 14px;
  line-height: 18px;

  color: #333333;
`;

const Description = styled.div`
  font-family: Mulish;
  font-style: normal;
  font-weight: normal;
  font-size: 14px;
  line-height: 18px;
  color: #bdbdbd;
`;

const Count = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

const Number = styled.p`
  font-family: Mulish;
  font-style: normal;
  font-weight: bold;
  font-size: 14px;
  line-height: 18px;
  color: #333333;
  margin-left: 0.5rem;
  margin-right: 0.5rem;
`;

const ButtonCount = styled.button`
  font-family: Mulish;
  font-style: normal;
  font-weight: bold;
  font-size: 16px;
  color: #828282;
  background: none;

  border: 1px solid #828282;
  box-sizing: border-box;
  border-radius: 4px;
  cursor: pointer;
  outline: none;
`;

export {
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
};
