import React from 'react';
import styles from './List.scss';
import MyComponent from '../Hero/Hero.js';

class List extends React.Component {
  render() {
    return (
      <section className={styles.component}>
        <MyComponent />
      </section>
    )
  }
}

export default List;
