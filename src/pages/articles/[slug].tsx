/* eslint-disable @next/next/no-img-element */
import React from 'react'
import type { NextPage } from 'next'
import { useRouter } from 'next/router'
import styled from 'styled-components'
import { P, H2 } from '../../components/PanelArticles'

export const Container = styled.div`
  display: flex;
  padding: 4em;

  /* flex-wrap: wrap; */
  flex-direction: column;
  align-items: center;
  /* justify-content: center; */
`

type Props = {}

const DetailedArticle: NextPage = (props: Props) => {
  const router = useRouter()
  const { title, tags, description, picture } = router.query
  console.log(router.query)

  return (
    <Container>
      <h1>{title}</h1>
      <img src={picture as string} alt='' />
      <p>{description}</p>
    </Container>
  )
}

export default DetailedArticle
