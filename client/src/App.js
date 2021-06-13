import Navbar from './components/Navbar/Navbar'
import Home from './Screens/HomeScreen/Home'
import Post from './Screens/PostScreen/PostScreen'
import Create from './Screens/CreateBlogScreen/Create'
import Settings from './Screens/Settings/Settings'
import Login from './Screens/Login/Login'
import Register from './Screens/Register/Register'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

function App() {
  const user = false;
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route exact path='/'><Home /></Route>
        <Route exact path='/register'><Register /></Route>
        <Route exact path='/login'>{(user === false) ? <Login /> : <Home />}</Route>
        <Route exact path='/create'>{(user === false) ? <Login /> : <Create />}</Route>
        <Route exact path='/settings'>{(user === false) ? <Login /> : <Settings />}</Route>
        <Route exact path='/post/:id'><Post /></Route>
      </Switch>


    </Router>
  );
}

export default App;
