type ArticleType = {
  title: string;
  description: string;
  picture?: string;
  tags?: string[];
  text: string;
}[];

const articles: ArticleType = [
  {
    title: "O que São Oracles?",
    description:
      "Para que servem as Oracles no mundo Blockchain? Quais suas vantagens?",
    picture:
      "https://i.ytimg.com/vi/uycQ7ReSt_c/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLC9bhnSwh7EF8HceDZfKIZlzw6B4Q",
    tags: ["Oracles", "ChainLink", "Link", "Ethereum", "Blockchain"],
    text: "",
  },
  {
    title: "O que São Stable Coins?",
    description:
      "Para que servem as Stable Coins e por que você deveria usá-las",
    picture:
      "https://i.ytimg.com/vi/pGzfexGmuVw/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLCBvEcdRgZxMJ2uTZp7sKspMvvQCw",
    tags: ["Stable", "Stable Coins"],
    text: "",
  },
];

export default articles;
