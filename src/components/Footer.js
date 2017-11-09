import React from 'react'
import { Menu, Icon, Divider, Grid, List, Container } from 'semantic-ui-react'

export const Footer = () => {

	return (
			 <Container textAlign='right'>
				<Divider />
					 
					 <Grid columns={4} divided>
						<Grid.Row textAlign='left'>
						  <Grid.Column>
							 <h4> Keep in touch!</h4>
							 <List>
								<List.Item color='blue'>
								  <List.Icon name='facebook' color='blue'/>
								  <List.Content>Facebook</List.Content>
								</List.Item>
								<List.Item>
								  <List.Icon name='youtube' color='red'/>
								  <List.Content>Youtube</List.Content>
								</List.Item>
								<List.Item>
								  <List.Icon name='google plus' color='red'/>
								  <List.Content>Google Plus</List.Content>
								</List.Item>
								<List.Item>
								  <List.Icon name='twitter' color='blue'/>
								  <List.Content>Twitter</List.Content>
								</List.Item>

							 </List>
						  </Grid.Column>
							  
						  <Grid.Column>
							 <h4> We Accept</h4>
							  <Menu icon='labeled' compact>
								<Menu.Item name='visa'  >
								  <Icon name='visa' color='red'/>
								  Visa
								</Menu.Item>

								<Menu.Item name='mastercard'  >
								  <Icon name='mastercard' color='blue'/>
								  Master
								</Menu.Item>

								<Menu.Item name='american express' >
								  <Icon name='american express' color='green' />
								  Amex
								</Menu.Item>
								
							  </Menu>
							 
						  </Grid.Column>
						  <Grid.Column >
							  <h4> Download our App</h4>
				
							   <Icon.Group size='big'>
								  <Icon circular name='android' color='teal' />
								</Icon.Group>
								<Icon.Group size='big'>
								  <Icon name='apple' circular color='teal'/>
								</Icon.Group>
								<Icon.Group size='big'>
								  <Icon name='windows' circular color='teal'/>
								</Icon.Group>	
						  </Grid.Column>
						  <Grid.Column >
							<h4> Shopping Redefined!</h4>
							  <Menu icon='labeled' compact>
								<Menu.Item name='point'  >
								  <Icon name='point' color='red' />
								  Track your Order
								</Menu.Item>


								<Menu.Item name='shipping' >
								  <Icon name='shipping' color='green' />
								  Free Shipping!
								</Menu.Item>
								
							  </Menu>
							 
						  </Grid.Column>
						</Grid.Row>
					  </Grid>
					  <Divider/>
					  <Divider/>
			</Container>		  
		)
}

