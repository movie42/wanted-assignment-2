import React, { ReactElement } from "react";
import styled from "styled-components";

interface Props extends React.HTMLAttributes<HTMLElement> {
  children: ReactElement;
}

const Main = ({ children }: Props) => {
  return <Container>{children}</Container>;
};

export default Main;

const Container = styled.main``;
