import React from 'react';
import styles from './Column.scss';
import PropTypes from 'prop-types';
//import Creator from '../Creator/Creator';
import Card from '../Card/Card.js';
import Icon from '../Icon/Icon.js';


class Column extends React.Component {
  static propTypes = {
    title: PropTypes.string.isRequired,
    cards: PropTypes.array,
    icon: PropTypes.string,
  }

  render() {
    const {title, icon, cards} = this.props;
    return (
      <section className={styles.component}>
        <h3 className={styles.title}>{title} 
          <span className={styles.icon}>
            <Icon name={icon} />
          </span>
        </h3>
        <div className={styles.cards}>
          {cards.map(cardsData => (
            <Card key={cardsData.id} {...cardsData} />
          ))}
        </div>
        {/*
        <div>
          {this.state.cards.map(({key, title}) => (
            <Card key={key} title={title}/>
          ))}
        </div>
        <div className={styles.creator}>
          <Creator text={settings.cardCreatorText} action={title => this.addCard(title)}/>
        </div>
        */}
      </section>
    );
  }
}

export default Column;