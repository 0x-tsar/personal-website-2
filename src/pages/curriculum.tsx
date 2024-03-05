// Curriculum.tsx
import React from 'react'
import styled from 'styled-components'

const Page = styled.div`
  padding: 2rem;
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
`

const Header = styled.header`
  text-align: center;
`

const Section = styled.section`
  margin-top: 1.5rem;
`

const Title = styled.h2`
  font-size: 1.5rem;
  color: #333;
  text-decoration: underline;
`

const List = styled.ul`
  list-style: none;
  padding: 0;
`

const ListItem = styled.li`
  margin-bottom: 0.5rem;
`

const Link = styled.a`
  color: #0645ad;
  text-decoration: none;
  &:hover {
    text-decoration: underline;
  }
`

const Subtitle = styled.h3`
  font-size: 1.2rem;
  color: #666;
`

const Curriculum: React.FC = () => {
  return (
    <Page>
      <Header>
        <h1>Gustavo Fernandes</h1>
        <p>
          GitHub: <Link href='https://github.com/0x-tsar'>0x-tsar</Link>
          <br />
          E-mail:{' '}
          <Link href='mailto:contato.gustavofernandes@hotmail.com'>
            contato.gustavofernandes@hotmail.com
          </Link>
          <br />
          Phone: +55 17 98821-7548
        </p>
      </Header>
      <Section>
        <Title>Skills Summary</Title>
        <p>
          At 27, I am seeking opportunities as a Solidity developer with a very
          good understanding of Solidity and Foundry for testing, also
          specialized expertise in Blockchain aspects, particularly Ethereum. I
          understand EVM/Bytecode and have some knowledge in JavaScript, Java
          for Android, and Python for Deep Learning. I have set aside the latter
          languages to focus solely on Solidity and other useful languages for
          Ethereum.
        </p>
        <p>
          Since 2017, I have been actively engaged in learning about Blockchain
          and Solidity. I began my professional career as a developer in 2021,
          conducting Quality Assurance (QA) reviews and identifying bugs in
          Smart Contracts through Bug Bounties sites such as Code4rena and
          Codehawks.
        </p>
        <p>
          Currently, I am developing a protocol dedicated to Decentralized
          Finance (DeFi) and Governance. I have completed the Minimum Viable
          Product (MVP) and the first iteration, and am now conducting tests
          using Foundry.
          <Link href='https://github.com/0x-tsar/NoTax-Protocol'>
            NoTax-Protocol
          </Link>
        </p>
        <p>I have prior knowledge in computer hardware maintenance.</p>
        <p>Fluent in English and intermediate proficiency in French (B1/B2).</p>
      </Section>
      <Section>
        <Title>Education</Title>
        <List>
          <ListItem>
            High School Diploma - Medalist and Outstanding Student, 2009
          </ListItem>
          <ListItem>Computer Operator Course</ListItem>
          <ListItem>Computer and Network Maintenance Course</ListItem>
          <ListItem>Patrick Collins Course – Solidity / Foundry</ListItem>
        </List>
      </Section>
      <Section>
        <Title>Professional Experience</Title>
        <Subtitle>Code4rena - @BRONZEDISC</Subtitle>
        <p>Auditor, 2022-2024</p>
        <p>
          Contributed to the audit of critical protocols handling millions of
          dollars (e.g., Ondo Finance $46m Fundraising), collaborating in
          Quality Assurance (QA) and bug identification in protocols.
        </p>
        <Subtitle>Codehawks - tsar</Subtitle>
        <p>Auditor, 2023-2024</p>
        <p>
          Participated in the audit of significant protocols, assisting in
          Quality Assurance (QA) and discovering bugs in the protocols.
        </p>
      </Section>
    </Page>
  )
}

export default Curriculum
