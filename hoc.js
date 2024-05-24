//hoc
import React from 'react'

const Hoc = (Component) => {
  return (
    class extends React.Component{
        state = {
            auth:true
        }
        render(){
            return(
                <div>
                   {this.state.auth ? <Component name="suresh"/> : <h1>Please Login</h1>} 
                </div>
            )
        }
    }
  )
}

export default Hoc

//app.js
import React from 'react'
import Hoc from './Hoc'

const App = (props) => {
  return (
    <div>
      welcom {props.name}
    </div>
  )
}

export default Hoc(App)
12071996