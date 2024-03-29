import ethereum from './ethereum.png'

type ArticleType = {
  title: string
  description: string
  picture?: string
  tags?: string[]
  text: string
}[]

const articles: ArticleType = [
  {
    title: 'O que é Ethereum?',
    description:
      'Ethereum é uma plataforma global, de código aberto para aplicações decentralizadas. Você pode pensar nela como um computador mundial que não pode ser desligado. Na Ethereum.. ',
    picture:
      'https://paxful.com/university/static/bf70ef23f8db52c26a4ee0da4782e069/d5b8e/What-is-Ethereum.webp',
    tags: ['ethereum', 'blockchain', 'network'],
    text: 'Ethereum é uma plataforma global, de código aberto para aplicações decentralizadas. Você pode pensar nela como um computador mundial que não pode ser desligado. Na Ethereum, desenvolvedores de software podem escrever contratos inteligentes que controlam valores digitais por um conjunto de critérios a são acessíveis em todo o mundo. A maioria dos DApps conhecidos nos últimos anos foram praticamente todos criados na Ethereum',
  },
  // {
  //   title: 'O que São Oracles?',
  //   description:
  //     'Para que servem as Oracles no mundo Blockchain? Quais suas vantagens?',
  //   picture:
  //     'https://i.ytimg.com/vi/uycQ7ReSt_c/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLC9bhnSwh7EF8HceDZfKIZlzw6B4Q',
  //   tags: ['Oracles', 'ChainLink', 'Link', 'Ethereum', 'Blockchain'],
  //   text: '',
  // },
  // {
  //   title: 'O que São Stable Coins?',
  //   description:
  //     'Para que servem as Stable Coins e por que você deveria usá-las',
  //   picture:
  //     'https://i.ytimg.com/vi/pGzfexGmuVw/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLCBvEcdRgZxMJ2uTZp7sKspMvvQCw',
  //   tags: ['Stable', 'Stable Coins'],
  //   text: '',
  // },
]

export default articles
