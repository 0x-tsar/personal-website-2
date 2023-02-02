import React from 'react'
import styled from 'styled-components'
import Link from 'next/link'

export const Container = styled.div`
  grid-area: header;

  display: flex;
  justify-content: space-around;
  padding-top: 2em;

  h1 {
    padding: 0;
    margin: 0;
  }
`

const Menu = styled.div`
  display: flex;
  cursor: pointer;
  margin-top: 1.4em;
  font-size: 1.2em;

  li {
    list-style: none;
    :hover {
      text-decoration: underline;
    }
  }
`

type Props = {}

const Header = (props: Props) => {
  return (
    <Container>
      <h1>Gustavo Fernandes v2</h1>
      <Menu>
        <li>
          <Link href={'/'}>
            <a>Home</a>
          </Link>
        </li>
        &nbsp;
        <li>
          <Link href={'/quotes'}>
            <a>Quotes</a>
          </Link>
        </li>
        &nbsp;
        <li>
          <Link href={'/bookshelf'}>
            <a>Bookshelf</a>
          </Link>
        </li>
        &nbsp;
        <li>
          <Link href={'/projects'}>
            <a>My Projects</a>
          </Link>
        </li>
        &nbsp;
        <li style={{ cursor: 'default' }}>
          <Link href={'/articles'}>
            <a style={{ pointerEvents: 'none' }}>
              {/* Articles */}
              <s>Articles [WIP]</s>
            </a>
          </Link>
        </li>
      </Menu>
    </Container>
  )
}

export default Header
