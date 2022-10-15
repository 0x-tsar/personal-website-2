/* eslint-disable @next/next/no-img-element */
import React from 'react'
import type { NextPage } from 'next'
import { useRouter } from 'next/router'
import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  padding: 4em;
  flex-direction: column;
  align-items: center;
`

type Props = {}

const DetailedArticle: NextPage = (props: Props) => {
  const router = useRouter()
  const { title, text, tags, description, picture } = router.query
  console.log(router.query)

  return (
    <Container>
      <h1>{title}</h1>
      <img src={picture as string} alt={picture as string} width={'500px'} />
      <div>
        <p style={{ fontSize: '1.4em' }}>{text}</p>
      </div>
    </Container>
  )
}

export default DetailedArticle
