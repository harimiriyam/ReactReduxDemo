import React from 'react'
import { PropTypes } from 'prop-types'
import { Form, Container , Button, Message } from 'semantic-ui-react'


export const AddProduct = ({ iconimage, product, brand, price, dispatch }) => {
	
	let _iconimage, _product, _brand, _price

	return (
			<Container textAlign='left'>			
			<Message
			  attached
			  header='Add Product'
			  content='Fill out the form below to add a product to the catalogue'
			/>
			<Form onSubmit={() => { 
				dispatch({
					type: 'ADD_PRODUCT', 
					iconimage: _iconimage.value,
					product: _product.value,
					brand: _brand.value,
					price: _price.value
				})}} className='attached fluid segment'>
			<div>
				<label>Image</label>
				<input type='text' id='iconimage' required defaultValue={iconimage} ref={(input) => { _iconimage = input; }}/>
			</div>
			<div>
			<label>Product</label>
			<input type='text' required defaultValue={product} ref={(input) => { _product = input; }} />
			</div>
			<div>
			<label>Brand</label>
			<input type='text' required defaultValue={brand} ref={(input) => { _brand = input; }} />
			</div>
			<div>
			<label>Price</label>
			<input type='text' required defaultValue={price} ref={(input) => { _price = input; }} />
			</div>
			 
			 
			
			  <Button color='blue'>Submit</Button>
			</Form>
  
			</Container>
			
		)
}

AddProduct.defaultProps = {
	iconimage: "nopreview.jpg",
	product : "",
	brand : "",
	price : 0
}

AddProduct.propTypes = {
	iconimage: PropTypes.string.isRequired,
	product: PropTypes.string.isRequired,
	brand: PropTypes.string.isRequired,
	price: PropTypes.number.isRequired
}