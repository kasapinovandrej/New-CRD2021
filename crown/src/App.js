import { Component } from 'react';
import HomePage from './pages/homepage/homepage.component';
import ShopPage from './pages/shop/shop.component';
import Header from './components/header/header.component';
import SingInAndSingUp from './pages/sing-in-and-sing-up/sing-in-and-sing-up.component';
import { Route, Switch, Redirect } from 'react-router-dom'
import { auth, createUserProfileDocument } from './firebase/firebase.utils'
import './App.scss';
import { connect } from 'react-redux'
import { setCurrentUser } from './redux/user/user.actions'


class App extends Component {

  unsubscribeFromAuth = null

  componentDidMount() {

    const { setCurrentUser } = this.props

    this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth)
        userRef.onSnapshot(snapShot => {
          setCurrentUser({
            currentUser: {
              id: snapShot.id,
              ...snapShot.data()
            }
          })
        })
      }
      setCurrentUser(userAuth)
    })

  }


  componentWillUnmount() {
    this.unsubscribeFromAuth()
  }


  render() {
    return (
      <div>
        <Header />
        <Switch>
          <Route path='/' exact component={HomePage} />
          <Route path='/shop' component={ShopPage} />
          <Route path='/singin' render={() => this.props.currentUser ? <Redirect to="/" /> : <SingInAndSingUp />} />
        </Switch>
      </div>
    );
  }
}

const mapStateToProps = ({ user }) => ({
  currentUser: user.currentUser
})

const mapDispatchToProps = (dispatch) => ({
  setCurrentUser: user => dispatch(setCurrentUser(user))
})

export default connect(mapStateToProps, mapDispatchToProps)(App);
