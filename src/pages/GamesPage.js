import React from 'react'
import 'semantic-ui-css/semantic.css';
import { Container, Header, Card, Rating, Icon, Grid, GridColumn} from 'semantic-ui-react';
 
import NavBar from '../components/NavBar';

const GamesPage = () =>{
    return(
        <React.Fragment>
            <NavBar/>
            <Container>
                <Header>Games</Header>
                <Grid columns={3} >
                    <Grid.Row>
                        <Grid.Column>
                            <Card>
                                <Card.Content
                                header="Tic-Tac-Toe"
                                meta="3 in a row"
                                >
                                
                                </Card.Content>
                               <Grid columns={2} >
                                   <Grid.Column>
                                        <Rating
                                        icon='star'
                                        rating={3}
                                        maxRating={5} 
                                        ></Rating>
                                   </Grid.Column>
                                       
                                   <Grid.Column>
                                   <Icon
                                        name="exclamation"
                                        corner="bottom right"
                                        circular
                                        link
                                        />
                                       
                                    </Grid.Column>
                               </Grid>

                            </Card>
                        </Grid.Column>
                        <Grid.Column>
                            <Card>
                                
                            </Card>
                        </Grid.Column>
                        <Grid.Column>
                            <Card>
                                
                            </Card>
                        </Grid.Column>
                    </Grid.Row>
                    <Grid.Row>
                        
                    </Grid.Row>
                </Grid>


            </Container>

        </React.Fragment>
    )


}

export default GamesPage;