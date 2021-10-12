import { Route, Switch } from 'react-router-dom'

import Header from './components/Header'
import Home from './pages/Home'
import Login from './pages/Login'
import Register from './pages/Register'
import Watchlist from './pages/Watchlist'
import NotFound from './pages/NotFound'

const App = () => (
  <>
    <Header />
    <Switch>
      <Route exact path='/' component={Home} />
      <Route path='/login' component={Login} />
      <Route path='/register' component={Register} />
      <Route path='/watchlist' component={Watchlist} />
      <Route path='*' component={NotFound} />
    </Switch>
  </>
)

export default App
