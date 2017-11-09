import React from 'react'
import { EcommCardRow } from './EcommCardRow'
import { Card, Container, Menu, Icon, Label,Dropdown, Divider,Button, Grid,Input } from 'semantic-ui-react'

const options = [
	{ key: 'product', icon: 'cubes', text: 'Product', value: 'product' },
	{ key: 'price', icon: 'rupee', text: 'Price', value: 'price' },
	{ key: 'brand', icon: 'tag', text: 'Brand', value: 'brand' }
]

export const EcommCardList  = ({catalogue, sortBy, addCart}) => {        
		return (
           <Container textAlign='right'>
				  <Grid>
					<Grid.Column width={10} textAlign='left'>
					</Grid.Column>
				  <Grid.Column width={6}>
						 <Menu compact>
						  <Button.Group color='teal'>
							<Button ><Icon name='sort' />Sort By</Button>
							<Dropdown options={options} floating button className='icon' onChange={sortBy} />
						  </Button.Group>
				  </Menu>
					</Grid.Column>
				  </Grid>
				 
				  
				  <Divider />
			 
				  <Card.Group itemsPerRow={5}>
						{catalogue.map((product, i) =>
							<EcommCardRow key={i}
									   {...product}
									   addCart={addCart}/>	
							)}
				 </Card.Group>
				 
			</Container>
        )
}