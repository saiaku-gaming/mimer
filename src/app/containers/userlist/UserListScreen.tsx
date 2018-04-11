import * as React from 'react'

const styles = require('./UserListScreen.scss')

interface State {
  name: string | null
}

class UserListScreen extends React.Component<{}, State> {

  constructor(props: any) {
    super(props)

    this.state = {
      name: null
    }
  }

  handleClick(user: string) {
    return (e: React.MouseEvent<HTMLSpanElement>) => {
      if (this.state.name === user) {
        this.setState({
          name: null
        })
      } else {
        this.setState({
          name: user
        })
      }
    }
  }

  render() {
    const users = ['svante', 'juni', 'blatg', 'johnny']

    return (
      <div>
        <h1>THIS IS A USER LIST</h1>
        {users.map((user, i) => {
          return (
            <div key={i}>
              <h3 className={styles.user}>USER {i + 1}</h3>
              <div className={styles.bakgrund}>
                <span className={styles.namn} onClick={this.handleClick(user)}>{user}</span>
                {this.state.name === user && <span className={styles.tjena}>Tjena</span>}
              </div>
            </div>
          )
        })}
      </div>
    )
  }
}

export default UserListScreen
