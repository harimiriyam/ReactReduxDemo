import React from 'react'
import { Menu, Icon, Divider,Header} from 'semantic-ui-react'
import { Link } from 'react-router-dom'

export const EcommMenu = () => (
    <div>
	 
	  <Menu pointing color="teal" inverted widths={4} icon='labeled'>
			<Menu.Item>
			   <Header as='h1' inverted>
					<Icon name='shopping bag' />
					<Header.Content>
					  React Shop
					</Header.Content>
				</Header>
            </Menu.Item>
            <Menu.Item>
			  <Icon name='home' />
              <Link to="/" >Home</Link>
            </Menu.Item>
			<Menu.Item>
			  <Icon name='plus' />
              <Link to="/addproduct">Add Product</Link>
            </Menu.Item>
			<Menu.Item>
			  <Icon name='dashboard' />
              <Link to="/dashboard">Dashboard</Link>
            </Menu.Item>
        </Menu>
        <Divider />		
    </div>
  
)



