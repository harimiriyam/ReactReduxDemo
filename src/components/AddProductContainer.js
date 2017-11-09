import { connect } from 'react-redux';
import { AddProduct } from './AddProduct';

export default connect(
    null,
    dispatch => {
        return { dispatch }
    })(AddProduct);