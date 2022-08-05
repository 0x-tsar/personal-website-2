import React from "react";
import styled from "styled-components";

export const Container = styled.div`
  background-color: blue;
  color: white;
  font-size: 2em;
`;

type Props = {};

type ArticleType = {
  title: string;
  description: string;
  picture?: string;
  tags: string[];
  text: string;
};

export const EachArticle = (props: ArticleType) => {
  return (
    <div>
      <h2>{props.title}</h2>
      <p>{props.description}</p>
      <p
        style={{
          fontSize: "15px",
          backgroundColor: "red",
          borderRadius: "3px",
          maxWidth: "fit-content",
          padding: "5px",
        }}
      >
        tags..
      </p>
    </div>
  );
};

export const PanelArticles = (props: Props) => {
  return (
    <Container>
      <EachArticle></EachArticle>
      <EachArticle></EachArticle>
      <EachArticle></EachArticle>
    </Container>
  );
};
