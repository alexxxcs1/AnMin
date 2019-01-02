import React, { Component } from 'react'
import style from './MobileHome.scss'
import { HashRouter,Route,Switch,Redirect} from 'react-router-dom';
import Register from './components/Register'
  
export class MobileHome extends Component {
constructor(props) {
  super(props);
  this.state = {};
     this.refreshProps = this.refreshProps.bind(this);
}
componentWillReceiveProps(nextprops) {
  this.refreshProps(nextprops);
}
componentDidMount() {
  this.refreshProps(this.props);
}
refreshProps(props) {
  
}
render() {
  return (
    <div className={style.MobileHomeBox}>
        <Switch>
            <Route path='/mobile/register' component={Register} />
        </Switch>
    </div>
   )
   }
}
export default MobileHome