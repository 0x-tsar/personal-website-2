/* eslint-disable @next/next/no-img-element */
import Link from 'next/link'
import React from 'react'
import styled from 'styled-components'
import articles from '../libs/articles'

export const P = styled.div`
  padding: 0;
  margin: 0;
`

export const H2 = styled.div`
  padding: 0;
  margin: 0;
`

export const Container = styled.div`
  /* background-color: blue; */
  color: black;
  font-size: 2em;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`

type Props = {}

type ArticleType = {
  title: string
  description: string
  picture?: string
  tags?: string[]
  text: string
}

export const EachArticle = (props: ArticleType) => {
  // console.log(props.title)

  return (
    <div
      style={{
        padding: '20px',
        cursor: 'pointer',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
        margin: '20px',
      }}
    >
      {props.picture ? (
        <img style={{ maxWidth: '300px' }} src={props.picture} alt='thumb' />
      ) : null}
      <H2>{props.title}</H2>
      <P>{props.description}</P>
      <div>
        {props.tags?.map((item, key) => {
          return (
            <span
              style={{
                fontSize: '15px',
                color: 'white',
                backgroundColor: 'red',
                borderRadius: '3px',
                maxWidth: 'fit-content',
                padding: '5px',
                marginLeft: '10px',
              }}
              key={key}
            >
              {item}
            </span>
          )
        })}
      </div>
      <div
        style={
          {
            // width: '100%',
            // height: '2px',
            // backgroundColor: 'black',
            // marginTop: '5px',
          }
        }
      ></div>
    </div>
  )
}

export const PanelArticles = (props: Props) => {
  return (
    <Container>
      {articles.map((item, key) => {
        return (
          <Link
            key={key}
            href={{
              pathname: `/articles/${item.title}`,
              query: item,
            }}
          >
            <a>
              <EachArticle
                title={item.title}
                description={item.description}
                tags={item.tags}
                text={item.text}
                picture={item.picture}
              ></EachArticle>
            </a>
          </Link>
        )
      })}
    </Container>
  )
}
