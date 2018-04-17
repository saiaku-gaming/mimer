import * as React from 'react'
import Bars from 'react-bar'
import ReactDOM from 'react-dom'

const styles = require('./UserListScreen.scss')

interface State {
 name: string | null
}

class UserListScreen extends React.Component<{}, State> {

 constructor(props: any) {
   super(props)

   this.state = {
     name: null [
        {label: 'Python', value: 50}
      ]
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
   const users = ['Svante', 'Juni', 'Adri', 'Jonte']

   return (
     <div>
       <h1>THIS IS A USER LIST</h1>
       {users.map((user, i) => {
         return (
           <div key={i}>
             <h3 className={styles.user}>USER {i + 1}</h3>
             <div className={this.state.name === user ? styles.selectbackground : styles.background}>
               <span className={styles.namn} onClick={this.handleClick(user)}>{user}</span>
               {this.state.name === user && <div className={styles.blevel}><span className={styles.level}>LEVEL</span></div>}
             </div>
               <div className="bar">
                 <Bars data={this.state.name} makeUppercase={true}/>
               </div>
           </div>
         )
       })}
     </div>
   )
 }
}

ReactDOM.render(
  <UserListScreen />,
  document.getElementById('root')
)

export default UserListScreen
