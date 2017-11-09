import { connect } from 'react-redux';
import { EcommCardList } from './EcommCardList';

export const mapStateToProps = (state) => ({
	catalogue: state
});

export const mapDispatchToProps = (dispatch) => ({
  addCart: () => {
    dispatch({type : 'ADD_ITEM_TO_CART'});
	},
	sortBy: (e, data) => {
    dispatch({type : 'SORT_BY', value : data.value});
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(EcommCardList);