import React from 'react'
import type { NextPage } from 'next'
import styled from 'styled-components'

type Props = {}

export const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin: 100px;
  margin-top: 100px;
  justify-content: center;
`

export const Post = styled.div`
  margin: 10px;
  font-size: 22px;
  margin-bottom: 20px;
`

const projects = [
  {
    title: 'Biological system',
    description:
      'A reward system for a car evolution simulation, assigning rewards based on performance and improvements each generation. Done with p5.js',
    video: (
      <video width='100%' autoPlay muted loop>
        <source
          src='https://storage.googleapis.com/staging.recycler-teste.appspot.com/video20.mp4'
          type='video/mp4'
        />
      </video>
    ),
  },
  {
    title: 'Ethereum Wallet Generator',
    description:
      'Generate Ethereum wallets with a single click. No need to download or install anything.',
    website: 'https://create-wallet-rosy.vercel.app/',
    image: (
      <img
        src='https://storage.googleapis.com/staging.recycler-teste.appspot.com/wallet-generator.png'
        width='100%'
        alt=''
      ></img>
    ),
    // github: 'https://github.com/BronzeDisc/soccer-cards',
  },
  {
    title: 'Soccer NFT Cards',
    description:
      'Soccer Cards, Opensea compatible (MUMBAI NETWORK ONLY! Update to mumbai network and reload the page!)',
    website: 'https://soccer-cards.vercel.app/market',
    image: (
      <img
        src='https://storage.googleapis.com/staging.recycler-teste.appspot.com/sssss9.png'
        width='100%'
        alt=''
      ></img>
    ),
    github: 'https://github.com/BronzeDisc/soccer-cards',
  },
  {
    title: 'Chainlink V2 and Typescript (RINKEBY TEST NETWORK)',
    description:
      'A random number generator getting the numbers from an Oracle and returning in a nice interface built with React and Typescript. Change your network to Rinkeby',
    website: 'https://chainlink-v2.vercel.app/',
    image: (
      <img
        src='https://storage.googleapis.com/staging.recycler-teste.appspot.com/ss8.png'
        width='100%'
        alt=''
      ></img>
    ),
    github: 'https://github.com/BronzeDisc/chainlink-v2',
  },

  {
    title: 'Super Mario Cards (MUMBAI TEST NETWORK)',
    description:
      'NFT cards visualizer built with NextJS, Styled-Components, Hardhat and Ethers. Nfts hosted on IPFS, Opensea compatible. Change the network to Mumbai Test',
    website: 'https://cards-super-mario.vercel.app/',
    image: (
      <img
        src='https://storage.googleapis.com/staging.recycler-teste.appspot.com/s6.png'
        width='100%'
        alt=''
      ></img>
    ),
    github: 'https://github.com/BronzeDisc/cards-super-mario',
  },
  {
    title: 'Pokemon viewer calling API using SSR and CSR',
    description:
      "I built this website to better understand the NextJS ways of rendering. It's Responsive and really good for mobile",
    website: 'https://pokemon-ssr-ssg.vercel.app/',
    image: (
      <img
        src='https://storage.googleapis.com/staging.recycler-teste.appspot.com/ss7.png'
        width='100%'
        alt=''
      ></img>
    ),
    github: 'https://github.com/BronzeDisc/pokemon-ssr-ssg',
  },
  {
    title: 'Gaulês Dicionário (Gaulês Verso)',
    description:
      'A vocabulary of a famous CS-GO streamer, Gaulês. Here I used NextJS, Styled-Components, MongoDB, Mongoose, Redis for caching and a search engine for easily query the database for meanings. On the backend I used Joi for parsing and cleaning the input.',
    website: 'https://gaules-verso.vercel.app/',
    image: (
      <img
        src='https://storage.googleapis.com/staging.recycler-teste.appspot.com/ss5.png'
        // src="./images/ss1.png"
        width='100%'
        alt=''
      ></img>
    ),
    github: 'https://github.com/BronzeDisc/gaules-verso',
  },
  {
    title: 'Crypto Prices from Chainlink',
    description:
      'Getting trustable and verifiable prices from Chainlink oracle. Made with NextJS, Solidity, Hardhat and Styled-Components',
    website: 'https://oracle-coins-prices.vercel.app/',
    image: (
      <img
        src='https://storage.googleapis.com/staging.recycler-teste.appspot.com/ss4.png'
        // src="./images/ss1.png"
        width='100%'
        alt=''
      ></img>
    ),
    github: 'https://github.com/BronzeDisc/oracle-coins-price',
  },
  {
    title: 'DeFi Bank',
    description:
      'A simple DeFi bank made with NextJS, Solidity, Hardhat and Styled-Components',
    website: 'https://bank-defi.vercel.app/',
    image: (
      <img
        src='https://storage.googleapis.com/staging.recycler-teste.appspot.com/ss3.png'
        // src="./images/ss1.png"
        width='100%'
        alt=''
      ></img>
    ),
    github: 'https://github.com/BronzeDisc/bank-defi/',
  },
  {
    title: 'Tiktok Clone',
    description:
      'A Tiktok homepage done with NextJS and styled-components, for developing tools were used ESLint, Prettier and EditorConfig',
    website: 'https://tiktok-clone-ruby.vercel.app/',
    image: (
      <img
        src='https://storage.googleapis.com/staging.recycler-teste.appspot.com/ss1.png'
        // src="./images/ss1.png"
        width='100%'
        alt=''
      ></img>
    ),
    github: 'https://github.com/BronzeDisc/tiktok-clone',
  },
  {
    title: 'Easy Lottery, a blockchain dice game',
    description:
      'A dice game using Chanlink to provide random numbers made with React (USE MUMBAI NETWORK TO INTERACT)',
    website: 'https://lottery-chainlink.herokuapp.com/',
    image: (
      <img
        src='https://storage.googleapis.com/staging.recycler-teste.appspot.com/link.png'
        // src="./images/chainlink.png"
        width='100%'
        alt=''
      ></img>
    ),
  },
  {
    title: 'Books IPFS/ FLEEK/ BLOCKCHAIN',
    description:
      "Interacting with IPFS through Fleek and using the blockchain to store information about the book's details. Soon will be adding project repository",
    image: (
      <img
        src='https://storage.googleapis.com/staging.recycler-teste.appspot.com/books.png'
        // src="./images/books.png"
        width='100%'
        alt=''
      ></img>
    ),
  },
  {
    title: 'ERC721 Holder built from scratch',
    description:
      "In this project I used ReactJS, Truffle, Solidity, NodeJS and Ganache to support the network. A ERC721 Holder you can mint 'random' assets of different colors, in this case the user can Mint tokens for free, just paying the gas to call the function. The website runs perfectly but the program I use to capture the gifs (Giphy) slows down the internet. I believe CryptoKitties were made similar to this with some mutation instead of random colors, which maybe I will try to replicate for learning purposes.",
    image: (
      <img
        src='https://storage.googleapis.com/staging.recycler-teste.appspot.com/erc721.gif'
        // src="./images/erc721.png"
        width='100%'
        alt=''
      ></img>
    ),
  },

  {
    title: 'Decentralized Video Uploader',
    description:
      "In this project I used ReactJS, Truffle, Solidity, NodeJS and Ganache to support the network. It's just like YouTube where you can upload videos and get some tips in Ether and NerdCoin, a ERC20 token I created. The videos are being uploaded to IPFS. The website runs perfectly but the program I use to capture the gifs (Giphy) slows down the internet.",
    image: (
      <img
        src='https://storage.googleapis.com/staging.recycler-teste.appspot.com/gif18.gif'
        // src="./images/gif18.gif"
        width='100%'
        alt=''
      ></img>
    ),
  },

  {
    title: 'Virtual Ethereum Farm',
    description:
      'One of my first DApps built in 2017 with Solidity, HTML, CSS and JQuery.',
    image: (
      <img
        src='https://storage.googleapis.com/staging.recycler-teste.appspot.com/ggif5.gif'
        // src="./images/ggif5.gif"
        width='100%'
        alt=''
      ></img>
    ),
  },

  {
    title: 'Sports Clone Website',
    description:
      'A clone of a known sports website, I used NextJS and styled-components for structuring, still in progress.',
    image: (
      <img
        src='https://storage.googleapis.com/staging.recycler-teste.appspot.com/ss2.png'
        // src="./images/ss2.png"
        width='100%'
        alt=''
      ></img>
    ),
    github: 'https://github.com/BronzeDisc/clone-ge',
  },

  {
    title: 'Fruit Colorization',
    description:
      'Model built on Python, no Data Augmentation, few samples, not tested on training data despite similar look, they are slightly rotated. (No MaxPooling2D nor UpSampling2D were used, just CNNS and Dense Layers)',
    image: (
      <img
        src='https://storage.googleapis.com/staging.recycler-teste.appspot.com/colorization.png'
        // src="./images/colorization.png"
        width='100%'
        alt=''
      ></img>
    ),
  },
  {
    title: 'Money Prediction',
    description: 'Model built on Python and samples picked by Android device.',
    image: (
      <img
        src='https://storage.googleapis.com/staging.recycler-teste.appspot.com/gif8.gif'
        // src="./images/gif8.gif"
        width='100%'
        alt=''
      ></img>
    ),
  },

  {
    title: 'Donation Ethereum Smart Contract',
    description: 'Smart Contract created with Solidity, HTML, CSS, Javascript.',
    image: (
      <img
        src='https://storage.googleapis.com/staging.recycler-teste.appspot.com/gif9.gif'
        // src=".images//gif9.gif"
        alt=''
        width='100%'
      ></img>
    ),
  },

  {
    title: 'Door Detector',
    description:
      "Model built on Python and Android app with Java, it sends a notification when the door is opened or closed to device. The door is checked by a webcam (On video the sound can be heard saying 'The Door was opened' and 'The door was closed').",
    image: (
      <img
        src='https://storage.googleapis.com/staging.recycler-teste.appspot.com/gif10.gif'
        alt=''
      ></img>
    ),
    // <img src="./images/gif10.gif"></img>
  },

  {
    title: 'Auto Encoder',
    description:
      'Built on Python and Keras (9 Epochs, 1 hour each, 9.861 samples, no Data Augmentation, MaxPooling2D and UpSampling2D was used on this case), A lot of space for improvement.',
    image: (
      <img
        src='https://storage.googleapis.com/staging.recycler-teste.appspot.com/smp.png'
        // src="./images/smp.png"
        width='100%'
        height='730px'
        alt=''
      ></img>
    ),
  },

  {
    title: 'Tinder Sample Picker',
    description:
      "I'm building a Tinder Bot, but first I need samples to classify my preferences, so I'm WebScrapping Tinder to get each picture and train them later, all the options are being rejected so it doesn't hit the day limit for a free account, so I have access to all the images avaiable, then after training the neural network with more than 30.000 samples, I'm going to delete this account to zero out the score and start again with a trained network with a premium account, having also unlimited picks sliding to right, increasing the database for further use and improvement.",
    image: (
      <img
        src='https://storage.googleapis.com/staging.recycler-teste.appspot.com/gif11.gif'
        // src="./images/gif11.gif"
        width='100%'
        alt=''
      ></img>
    ),
  },

  {
    title: 'Finding coordinates of object',
    description:
      "This is a proof-of-concept of a Neural Network finding the object's coordinates with just 900 labeled training dataset and 100 for test (generated randomly). Can EASILY be improved just by increasing the number of samples, the ones displaying that are not so accurate were purposely picked to show the `worst cases` because the majority of the samples were perfect, the most complex part was cleaning and preparing the data to get just the necessary numbers. All of these squares were generated after the training, none of these are in the training set, so it behaved pretty well by the small amount of samples. This type of concept can have multiple types of utilities because not only it can classify the object but also tell you where it is. ",
    image: (
      <img
        src='https://storage.googleapis.com/staging.recycler-teste.appspot.com/finding.png'
        // src="./images/finding.png"
        width='100%'
        alt=''
      ></img>
    ),
  },

  {
    title: 'Feed System',
    description:
      'Feed system with different types of features, it was built with Java and Firebase Database.',

    image: (
      <img
        src='https://storage.googleapis.com/staging.recycler-teste.appspot.com/gif12.gif'
        // src="./images/gif12.gif"
        height='1000px'
        alt=''
      ></img>
    ),
  },
  {
    title: 'Instagram Decentralized + ERC20',
    description:
      'I cloned an Instagram based decentralized project and created my own ERC-20 coin and added to it so I could also tip the photos with this new coin. Also made some changes with ReactJS',
    image: (
      <img
        src='https://storage.googleapis.com/staging.recycler-teste.appspot.com/gif17.gif'
        // src="./images/gif17.gif"
        width='100%'
        height='700px'
        alt=''
      ></img>
    ),
  },
  {
    title: 'Tinder WebScrapping',
    description:
      "This is a better Tinder bot buit from scratch with new features, now it's able to change cities when no one is found at the city you are located at, the bot changes the city according to the cities I want to go to and starts the process normally again, I also solved a loop problem, after a certain loop time, the bot would break because of 'Inifite Loop', so I created a small loop to go for 600 profiles then break the small loop and count +1 on the bigger one, like a small gear moving a bigger one, worked perfectly! in 2 weeks it got more than 1100 matches and goes on non-stop. This bot made more than 4000 matches before I turned it off.",
    image: (
      <img
        src='https://storage.googleapis.com/staging.recycler-teste.appspot.com/gif15.gif'
        alt=''
      ></img>
    ),
    // <img src="./images/gif15.gif"></img>
  },
  {
    title: 'Simple Classification Model',
    description:
      'Built with Javascript and TensorFlow and trained on web client-side. (Just CNN and Dense layers used).',
    image: (
      <img
        src='https://storage.googleapis.com/staging.recycler-teste.appspot.com/gif5.gif'
        alt=''
      ></img>
      // <img src="./images/gif5.gif"></img>
    ),
  },
  {
    title: 'Sequence of bottle caps',
    description:
      'Built with Javascript and TensorFlow and trained on web client-side. (No type of RNN were used here).',
    image: (
      <img
        src='https://storage.googleapis.com/staging.recycler-teste.appspot.com/gif6.gif'
        width='100%'
        alt='caps deep learning python'
      ></img>
    ),
  },

  {
    title: 'Color Prediction',
    description:
      'Device Generates random colors and depending on the color picked it sends to Firebase database the data and predicts on Neural Network client side on web (HTML,CSS,JS,TensorFlow) and sends result predicted back to device.',
    image: (
      <img
        src='https://storage.googleapis.com/staging.recycler-teste.appspot.com/ggif3.gif'
        alt=''
      ></img>
      // <img src="./images/ggif3.gif"></img>
    ),
  },

  // {
  //   title: "Sample Picker",
  //   description:
  //     "Simple sample picker to train later built on Java, data already classified.",
  // image: <img src="ggif2.gif" width="100%"></img>,
  // },

  {
    title: 'Game Store',
    description: 'Store built using Java and Firebase. (not finished)',
    image: (
      <img
        src='https://storage.googleapis.com/staging.recycler-teste.appspot.com/ggif1.gif'
        // src="./images/ggif1.gif"
        width='100%'
        alt=''
      ></img>
    ),
  },
  {
    title: 'Simple History Quiz',
    description:
      'Built on Android, testing knowledge about important figures of History.',
    image: (
      <img
        src='https://storage.googleapis.com/staging.recycler-teste.appspot.com/gif7.gif'
        // src="./images/gif7.gif"
        width='100%'
        alt=''
      ></img>
    ),
  },

  {
    title: 'Simple App Chat',
    description:
      'Simple chat for Android made with java with functionalities like last seen, message visualized and also emojis avaiable.',
    image: (
      <img
        src='https://storage.googleapis.com/staging.recycler-teste.appspot.com/gif13.gif'
        alt=''
      ></img>
      // <img src="./images/gif13.gif"></img>
    ),
  },

  {
    title: 'Book recomendation System AI based in JS and TF.js',
    description:
      'Built in Javascript using Tensorflow with Convolutional, MaxPooling2D and Dense layers. Samples had 40x40 in size with 1 gray channel, I removed the other ones because it was too heavy, actually it worked REALLY well as we can see, despite the ilumination. 554 samples were picked, roughly 200 for each book and the rest for NO BOOK and ran through 25 epochs (not even necessary that much). I implemented a section on the left side to give the links and price to the books recognized. Also all the computation was made client side, no server was necessary here.',
    image: (
      <img
        src='https://storage.googleapis.com/staging.recycler-teste.appspot.com/gif14.gif'
        // src="./images/gif14.gif"
        width='100%'
        alt=''
      ></img>
    ),
  },
]

const Projects: NextPage = (props: Props) => {
  return (
    <Container>
      {projects.map((item, key) => {
        return (
          <Post key={key}>
            <h4>{item.title}</h4>
            <p>{item.description}</p>
            {item.website ? (
              <a
                href={item.website}
                style={{ color: 'blue', textDecoration: 'underline' }}
              >
                {item.title + ' website'}
                <br></br>
                <br></br>
              </a>
            ) : (
              ''
            )}
            <div style={{ display: 'flex', justifyContent: 'center' }}>
              {item.image || item.video}
            </div>
            <br />
            {item.github ? (
              <div style={{ color: 'blue', textDecoration: 'underline' }}>
                <a href={item.github}>Project repository</a>
              </div>
            ) : (
              <div></div>
            )}
          </Post>
        )
      })}
    </Container>
  )
}

export default Projects
