import React from "react";
import styled from "styled-components";
import articles from "../libs/articles";

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
  tags?: string[];
  text: string;
};

export const EachArticle = (props: ArticleType) => {
  return (
    <div style={{ padding: "20px", cursor: "pointer" }}>
      <h2>{props.title}</h2>
      <p>{props.description}</p>
      {props.tags?.map((item, key) => {
        return (
          <span
            style={{
              fontSize: "15px",
              backgroundColor: "red",
              borderRadius: "3px",
              maxWidth: "fit-content",
              padding: "5px",
              marginLeft: "10px",
            }}
            key={key}
          >
            {item}
          </span>
        );
      })}
      <div
        style={{
          width: "100%",
          height: "2px",
          backgroundColor: "black",
          marginTop: "5px",
        }}
      ></div>
    </div>
  );
};

export const PanelArticles = (props: Props) => {
  return (
    <Container>
      {articles.map((item, key) => {
        return (
          <EachArticle
            key={key}
            title={item.title}
            description={item.description}
            tags={item.tags}
            text={item.text}
          ></EachArticle>
        );
      })}
    </Container>
  );
};
