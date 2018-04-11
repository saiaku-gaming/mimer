import * as classnames from 'classnames'
import * as React from 'react'

const styles = require('./Navbar.scss')

class Navbar extends React.Component {
  render() {
    return (
      <ul className={styles.navbarContainer}>
        <li className={styles.navbarItem}>
          <a className={styles.navbarLink} href="#home">Home</a>
        </li>
        <li className={styles.navbarItem}>
          <a className={styles.navbarLink} href="#login">Login</a>
        </li>
        <li className={styles.navbarItem}>
          <a className={styles.navbarLink} href="#userlist">User List</a>
        </li>
      </ul>
    )
  }
}

export default Navbar
