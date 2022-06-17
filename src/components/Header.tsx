import React from "react";
import styled from "styled-components";

export const Container = styled.div`
  grid-area: header;
  background-color: green;
`;

type Props = {};

const Header = (props: Props) => {
  return <Container>Header</Container>;
};

export default Header;
