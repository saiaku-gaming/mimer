import * as classnames from 'classnames'
import * as React from 'react'

// import { RouteComponentProps, withRouter } from 'react-router'

const styles = require('./Navbar.scss')

class Navbar extends React.Component {
  render() {
    console.log(this)
    return (
      <ul className={styles.navbarContainer}>
        <li className={styles.navbarItem}>
          {<a className={styles.navbarLink} href="#home">Home</a>}
        </li>
        <li className={styles.navbarItem}>
          <a className={styles.navbarLink} href="#login">Login</a>
        </li>
      </ul>
    )
  }
}

export default Navbar
