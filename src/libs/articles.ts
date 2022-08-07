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
    picture: "https://picsum.photos/200/300",
    tags: ["Oracles", "ChainLink", "Link", "Ethereum", "Blockchain"],
    text: "",
  },
  {
    title: "O que São Stable Coins?",
    description:
      "Para que servem as Stable Coins e por que você deveria usá-las",
    picture: "https://picsum.photos/300/300",
    tags: ["Stable", "Stable Coins"],
    text: "",
  },
];

export default articles;
