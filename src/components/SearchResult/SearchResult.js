import React from 'react';
import styles from './SearchResult.scss';
import PropTypes from 'prop-types';
import Card from '../Card/Card.js';
import Icon from '../Icon/Icon.js';
import Container from '../Container/Container.js';
import {settings} from '../../data/dataStore';

class SearchResult extends React.Component {
  static propTypes = {
    cards: PropTypes.array,
    icon: PropTypes.string,
  }

  static defaultProps = {
    icon: settings.defaultColumnIcon,
  }

  render() {
    const {icon, cards} = this.props;
    return (
      <Container>
        <section className={styles.component}>
          <h3 className={styles.title}>Search Result
            <span className={styles.icon}>
              <Icon name={icon} />
            </span>
          </h3>
          <div>
            {cards.map(cardData => (
              <Card key={cardData.id} {...cardData} />
            ))}
          </div>
        </section>
      </Container>
    );
  }
}

export default SearchResult;