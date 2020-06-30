import {connect} from 'react-redux';
import SearchResult from './SearchResult';
import {getFilteredCards, getFilteredCardsForList} from '../../redux/cardsRedux.js';

const mapStateToProps = (state, props) => ({
  cards: getFilteredCards(state, props.match.params.id),
});

const mapDispatchToProps = (dispatch, props) => ({
  addCard: title => dispatch(getFilteredCardsForList({
    columnId: props.id,
    title,
  })),
});

export default connect(mapStateToProps, mapDispatchToProps)(SearchResult);
