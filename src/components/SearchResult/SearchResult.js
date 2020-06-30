import React from 'react';
import styles from './Column.scss';
import PropTypes from 'prop-types';
import Creator from '../Creator/Creator';

class SearchResult extends React.Component {
  static propTypes = {
    title: PropTypes.string.isRequired,
    cards: PropTypes.array,
    icon: PropTypes.string,
    addCard: PropTypes.func,
  }

  static defaultProps = {
    icon: settings.defaultColumnIcon,
  }

  render() {
    const {title, icon, cards, addCard} = this.props;
    return (
      <Container>
        <section className={styles.component}>
          <h3 className={styles.title}>{title} 
            <span className={styles.icon}>
              <Icon name={icon} />
            </span>
          </h3>
          <div>
            {cards.map(cardData => (
              <Card key={cardData.id} {...cardData} />
            ))}
          </div>
          <div className={styles.creator}>
            <Creator text={settings.cardCreatorText} action={addCard}/>
          </div>
        </section>
      </Container>
    );
  }
}

export default SearchResult;