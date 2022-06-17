import React, { PropsWithChildren, FC } from "react";
import styled from "styled-components";
import Header from "./Header";

export const Container = styled.div`
  background-color: #feefe1;
  font-family: "Anonymous Pro";

  width: 100vw;
  height: 100vh;

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
