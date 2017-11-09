import { createStore } from 'redux';
import _ from 'lodash'

const initialState = [{iconimage : 'moto.jpg', product : 'Mobile phone', brand : 'Motorolla', price : '$10'}, 
{iconimage : 'iphone.jpg', product : 'Mobile phone', brand : 'Apple', price : '$25'}, 
{iconimage : 'nopreview.jpg', product : 'ABC', brand : 'XYZ', price : '$5'}, 
{iconimage : 'samsung.jpg', product : 'Mobile phone', brand : 'Samsung', price : '$15'}];

export function cartReducer(state = initialState, action) {
    switch (action.type) {
      case 'ADD_PRODUCT':
        return [...initialState, {
            iconimage: action.iconimage,
            product: action.product,
            brand: action.brand,
            price: action.price
        }];
      case 'SORT_BY':
        return _.orderBy(state, action.value)
      default:
        return state;
    }
  }
  
  export default createStore(cartReducer);