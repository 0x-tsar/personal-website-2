import React from "react";
import styled from "styled-components";

export const Container = styled.div`
  grid-area: header;

  display: flex;
  justify-content: space-around;
  padding-top: 2em;

  h1 {
    padding: 0;
    margin: 0;
  }
`;

const Menu = styled.div`
  display: flex;
  cursor: pointer;
  margin-top: 1.4em;
  font-size: 1.2em;

  div {
    :hover {
      text-decoration: underline;
    }
  }
`;

type Props = {};

const Header = (props: Props) => {
  return (
    <Container>
      <h1>Gustavo Fernandes</h1>
      <Menu>
        <div>Home</div> &nbsp;
        <div>Quotes</div> &nbsp;
        <div>Bookshelf</div> &nbsp;
        <div>My Projects</div> &nbsp;
      </Menu>
    </Container>
  );
};

export default Header;
