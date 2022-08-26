import React, { PropsWithChildren, FC } from "react";
import styled from "styled-components";
import Header from "./Header";

export const Container = styled.div`
  background-color: #feefe1;
  font-family: "Anonymous Pro";
  color: black;

  min-width: 100vw;
  width: 100vw;
  min-height: 100vh;
  height: fit-content;

  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 100px;
  grid-template-areas:
    "header"
    "main";
`;

type Props = {};

const Layout: FC<PropsWithChildren<Props>> = ({ children }) => {
  return (
    <Container>
      <Header />
      {children}
    </Container>
  );
};

export default Layout;
