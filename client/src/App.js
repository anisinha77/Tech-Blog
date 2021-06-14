import Navbar from './components/Navbar/Navbar'
import Home from './Screens/HomeScreen/Home'
import Post from './Screens/PostScreen/PostScreen'
import Create from './Screens/CreateBlogScreen/Create'
import Settings from './Screens/Settings/Settings'
import Login from './Screens/Login/Login'
import Register from './Screens/Register/Register'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import { Context } from './context/Context'
import { useContext } from 'react'

function App() {
  const { user } = useContext(Context)
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route exact path='/'><Home /></Route>
        <Route exact path='/register'><Register /></Route>
        <Route exact path='/login'>{(user === null) ? <Login /> : <Home />}</Route>
        <Route exact path='/create'>{(user === null) ? <Login /> : <Create />}</Route>
        <Route exact path='/settings'>{(user === null) ? <Login /> : <Settings />}</Route>
        <Route exact path='/post/:id'><Post /></Route>
      </Switch>


    </Router>
  );
}

export default App;
