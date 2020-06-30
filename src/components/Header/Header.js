import React from 'react';
import PropTypes from 'prop-types';
import {NavLink, Link} from 'react-router-dom';
import styles from './Header.scss';
import Container from '../Container/Container';
import Search from '../Search/Search';
import Icon from '../Icon/Icon';
import {settings} from '../../data/dataStore';

class Header extends React.Component {
  static propTypes = {
    icon: PropTypes.string,
  }

  render() {
    return (
      <header className={styles.component}>
        <Container>
          <div className={styles.wrapper}>
            <Link className={styles.logo} to='/'>
              <Icon name={settings.header.icon} /> 
            </Link>
            <Search />
            <nav>
              <NavLink exact to='/' activeClassName='active'>Home</NavLink>
              <NavLink exact to='/info' activeClassName='active'>Info</NavLink>
              <NavLink exact to='/faq' activeClassName='active'>Faq</NavLink>
            </nav>
          </div>
        </Container>
      </header>
    );
  }
}

export default Header;