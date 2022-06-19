import React, { useState, useEffect } from "react";
import type { NextPage } from "next";

import styled from "styled-components";
import quotes from "../libs/quotes";
// import FetchData from "../api/FetchData";

export const Container = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 100px;
  font-size: 1.2em;
`;

export const Holder = styled.div`
  padding: 0 100px;
`;

type Props = {};

const Quotes: NextPage = (props: Props) => {
  const [randomQuote, setRandomQuote] = useState<string>();

  return (
    <Container>
      <Holder>
        <br></br>
        {quotes.map((item, k) => {
          return (
            <div key={k}>
              {item.highlighted ? (
                <span style={{ color: "red", fontWeight: "bolder" }}>
                  <p>{item.quote}</p>
                  <strong>{item.author}</strong>
                  <br></br>
                  <br></br>
                </span>
              ) : (
                <div>
                  <p>{item.quote}</p>
                  <strong>{item.author}</strong>
                  <br></br>
                  <br></br>
                </div>
              )}
            </div>
          );
        })}

        <div
          style={{ marginTop: 100, position: "relative", marginBottom: "40px" }}
        >
          {/* {randomQuote ? (
            <div>
              {"Random Quote"}
              <small>
                [I do not agree with all of them, this is just for fun]
              </small>
              :<br></br>
              <br></br>`{randomQuote.text}` <br></br>
              <strong>- {randomQuote.author}</strong>
            </div>
          ) : (
            <div></div>
          )} */}
        </div>
      </Holder>
    </Container>
  );
};

export default Quotes;
