import React from 'react'
import 'semantic-ui-css/semantic.css';
import { Container, Segment, Header, Button} from 'semantic-ui-react';
 
import NavBar from '../components/NavBar';


const HomePage = () =>{
  return(

    <React.Fragment>
      <NavBar/>
      {/* <Container>
        what
      </Container> */}

      <Segment>
        <Container textAlign='center'>
          <Header>Home</Header>
          <p>Some text that needs not readen</p>
          <Button
          color='green'
          >
            Join Now!
          </Button>
        </Container>

      </Segment>
      <Container>
        <Header>News</Header>
        <p>some more random text</p>
      </Container>

      
    </React.Fragment>
   
  )
}

export default HomePage 