import React, { Component } from 'react';
import { Container, Header, Image } from 'semantic-ui-react'
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
      This tribute to Harambe should be here. I don't know who to contact
      about this domain but if it's you, please get in touch.
    </p>
    <p>
    Amin Shah Gilani {"<"}<a href="mailto:amin@gilani.me">amin@gilani.me</a>{">"} (<a href="https://keybase.io/gilani">PGP Key</a>)
    </p>
  </Container>
)


class App extends Component {
  render() {
    return (
      <div id="App">
      <HarambeContainer />
      <TextContainer />
      </div>
    );
  }
}

export default App;
