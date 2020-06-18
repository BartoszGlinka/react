import React from 'react';
import styles from './App.scss';
import List from '../List/ListContainer.js';
import {settings} from '../../data/dataStore';
import Creator from '../Creator/Creator';
import PropTypes from 'prop-types';

class App extends React.Component {
  static propTypes = {
    title: PropTypes.node,
    subtitle: PropTypes.node,
    lists: PropTypes.array,
  }
  render() {
    const {title, subtitle, lists} = this.props;
    return (
      <main className={styles.component}>
        <h1 className={styles.title}>{title}</h1>
        <h2 className={styles.subtitle}>{subtitle}</h2>
        {lists.map(listData => (
          <List key={listData.id} {...listData} />
        ))}
        <div className={styles.creator}>
          <Creator text={settings.listCreatorText} action={title => this.addList(title)} />
        </div>
      </main>
    );
  }
  
  addList(){
    this.setState(state => (
      {
        list: [
          ...state.list,
        ],
      }
    ));
  }
}



export default App;
