import './App.scss';
import HomePage from './pages/homepage/homepage.component';
import { Route, Switch } from 'react-router-dom'

const HatsPage = (props) => {
  console.log(props)
  return <div><h1>HATS PAGE</h1></div>
}

function App() {
  return (
    <div >
      <Switch>
        <Route path='/' exact component={HomePage} />
        <Route path='/hats' component={HatsPage} />
      </Switch>
    </div>
  );
}

export default App;
