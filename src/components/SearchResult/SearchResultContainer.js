import {connect} from 'react-redux';
import SearchResult from './SearchResult';
import {getFilteredCardsForList} from '../../redux/cardsRedux.js';

const mapStateToProps = (state, props) => ({
  cards: getFilteredCardsForList(state, props.match.params.id),
});

export default connect(mapStateToProps)(SearchResult);
