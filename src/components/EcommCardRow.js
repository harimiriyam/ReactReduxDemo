import React from 'react'
import { Card, Icon, Image, Button } from 'semantic-ui-react'

const iconCreator = (iconim) => {
	return '../assets/images/'+iconim;
}


export const EcommCardRow = ({iconimage,product,brand,price,addCart}) => (
	<Card>
    <Image src={iconCreator(iconimage)} /> 
    <Card.Content>
      <Card.Header>
	  {product}
      </Card.Header>
      <Card.Meta>
        <span>
		{brand}
        </span>
      </Card.Meta>
    </Card.Content>
    <Card.Content extra>
		<Button color='teal'>
				<Icon name='rupee' />
				{price}
		</Button>
        
		 <Button color='red' animated='vertical' floated='right' onClick={ addCart }>
			  <Button.Content hidden>Shop</Button.Content>
			  <Button.Content visible>
				<Icon name='shop' />
			  </Button.Content>
		</Button>
    </Card.Content>
  </Card>						

)