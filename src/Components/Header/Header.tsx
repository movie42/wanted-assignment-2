import React from "react";
import styled from "styled-components";

const Header = () => {
  return <Container>Angular/Angular-cli</Container>;
};

export default Header;

const Container = styled.header`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 7rem;
  font-size: 3rem;
  padding: 0.5rem;
  text-align: center;
`;
