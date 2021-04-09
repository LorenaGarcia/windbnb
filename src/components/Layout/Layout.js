import React from "react";
import { useState } from "react";
import { Search } from "../Search";
import { MainContent } from "../MainContent";
import { Container, Navigation, Main, Footer } from "./Layout.styles";
import rooms from "../../data/stays.json";

const Layout = () => {
  const [modal, setModal] = useState(false);
  const [location, setLocation] = useState("");
  const [listLocation, setListLocation] = useState([]);
  const [isActiveLocation, setIsActiveLocation] = useState(false);
  const [isActiveGuests, setIsActiveGuests] = useState(false);
  const [adults, setAdults] = useState(0);
  const [children, setChildren] = useState(0);
  const [resultsSearch, setResultsSearch] = useState([]);
  const locations = [
    { name: "Helsinki, Finland", value: "Helsinki" },
    { name: "Turku, Finland", value: "Turku" },
    { name: "Oulu, Finland", value: "Oulu" },
    { name: "Vaasa, Finland", value: "Vaasa" },
  ];

  const handleModal = () => {
    setModal(!modal);
  };

  const addLocation = (e) => {
    setIsActiveLocation(true);
    setIsActiveGuests(false);
    setLocation(e.target.value);
    if (location) {
      const results = locations.filter((value) =>
        value.name.toUpperCase().includes(location.toUpperCase())
      );
      setListLocation(results);
    }
  };

  const selectLocation = (value) => {
    setLocation(value);
    setIsActiveLocation(false);
  };

  const addGuests = () => {
    setIsActiveGuests(true);
    setIsActiveLocation(false);
  };

  const lessAdult = () => {
    let clicks = adults;
    if (adults > 0) {
      clicks -= 1;
    }
    setAdults(clicks);
  };

  const plusAdult = () => {
    let clicks = adults;
    clicks += 1;
    setAdults(clicks);
  };

  const lessChildren = () => {
    let resultChildren = children;
    if (children > 0) {
      resultChildren -= 1;
    }
    setChildren(resultChildren);
  };

  const plusChildren = () => {
    let resultChildren = children;
    resultChildren += 1;
    setChildren(resultChildren);
  };

  const searchStays = () => {
    setModal(false);
    if (location) {
      let temp = "";
      temp = location.replace(", Finland", "");
      const resultStays = rooms.filter((value) => value.city.includes(temp));
      setResultsSearch(resultStays);
    }
  };

  return (
    <Container>
      <Navigation>
        <Search
          locations={location ? listLocation : locations}
          modal={modal}
          isActiveLocation={isActiveLocation}
          isActiveGuests={isActiveGuests}
          handleModal={handleModal}
          addLocation={addLocation}
          selectLocation={selectLocation}
          location={location}
          adults={adults}
          children={children}
          lessAdult={lessAdult}
          plusAdult={plusAdult}
          lessChildren={lessChildren}
          plusChildren={plusChildren}
          addGuests={addGuests}
          searchStays={searchStays}
        />
      </Navigation>
      <Main>
        <MainContent
          rooms={resultsSearch.length !== 0 ? resultsSearch : rooms}
        />
      </Main>
      <Footer>created by Lorraine - devChallenges.io</Footer>
    </Container>
  );
};

export { Layout };
