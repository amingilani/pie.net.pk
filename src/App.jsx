import React, { Component } from 'react';
import { Container, Header } from 'semantic-ui-react'
import 'semantic-ui-css/semantic.min.css';
import harambe from './harambe.jpg';
import './App.css';
const ContainerExampleText = () => (
  <Container textAlign={'left'} text>
    <figure>
      <img src={harambe} width="500px"/>
      <figcaption>Harambe, 1999 - 2016</figcaption>
    </figure>
    <Header textAlign={'center'} as='h2'>This shouldn't be here</Header>
    <p>
      Hi<br />
      This tribute to Harambe should be here. I don't know who to contact
      about this domain, but if it's you, get in touch.
    </p>
    <p>
    Amin Shah Gilani (<a href="https://keybase.io/gilani">PGP Key</a>)
    </p>
  </Container>
)


class App extends Component {
  render() {
    return (
      <ContainerExampleText />
    );
  }
}

export default App;
