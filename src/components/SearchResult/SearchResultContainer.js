import {connect} from 'react-redux';
import SearchResult from './SearchResult';
import {getCardsForColumn, getFilteredCardsForList} from '../../redux/cardsRedux.js';

const mapStateToProps = (state, props) => ({
  cards: getFilteredCards(state, props.match.params.id)
  {console.log(state)}
});

const mapDispatchToProps = (dispatch, props) => ({
  addCard: title => dispatch(getFilteredCardsForList({
    columnId: props.id,
    title,
  })),
});

export default connect(mapStateToProps, mapDispatchToProps)(SearchResult);
